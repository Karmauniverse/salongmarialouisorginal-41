
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Create a simple email body
    const emailBody = `
      Namn: ${formData.name}
      Email: ${formData.email}
      Telefon: ${formData.phone}
      Meddelande: ${formData.message}
    `;
    
    // Send the form data using a mailto link and Formsubmit.co as a fallback
    try {
      const response = await fetch('https://formsubmit.co/ajax/salongmarialouis@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Ny kontakt från Salong Maria Louis hemsida',
          phone: formData.phone
        })
      });
      
      if (response.ok) {
        toast({
          title: "Tack för ditt meddelande!",
          description: "Vi återkommer till dig så snart som möjligt.",
        });
        setFormData({ name: '', email: '', message: '', phone: '' });
      } else {
        // Fallback to mailto link if the API fails
        window.location.href = `mailto:salongmarialouis@gmail.com?subject=Kontakt från hemsidan&body=${encodeURIComponent(emailBody)}`;
        toast({
          title: "E-postklient öppnad",
          description: "Om inget händer, vänligen kontakta oss direkt via salongmarialouis@gmail.com",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to mailto link if there's an error
      window.location.href = `mailto:salongmarialouis@gmail.com?subject=Kontakt från hemsidan&body=${encodeURIComponent(emailBody)}`;
      toast({
        title: "E-postklient öppnad",
        description: "Om inget händer, vänligen kontakta oss direkt via salongmarialouis@gmail.com",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Kontakta Oss Direkt</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Har du frågor eller vill boka en tid? Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Namn</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ditt namn"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-post</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Din e-postadress"
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefonnummer</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ditt telefonnummer (valfritt)"
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Skriv ditt meddelande här..."
                className="w-full min-h-[150px]"
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all"
              >
                {isLoading ? 'Skickar...' : 'Skicka Meddelande'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
