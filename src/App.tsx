import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Facebook, Youtube, Instagram, Calendar, Mail, CheckCircle2, ArrowRight, Star, ChevronLeft, ChevronRight, Clock, ChevronDown } from 'lucide-react';

const slides = [
  {
    id: 1,
    heading: "Meet",
    highlight: "Dr. Shreyansh Patel",
    subheading: "Family Physician (B.H.M.S)",
    description: "Providing comprehensive healthcare for the entire family, focusing on preventive care, accurate diagnosis, and holistic treatment plans.",
    image: "https://picsum.photos/seed/modern-medical-clinic/1600/1000",
    imageClass: ""
  },
  {
    id: 2,
    heading: "Meet",
    highlight: "Dr. Vrutika Patel",
    subheading: "Homeopathic Consultant (B.H.M.S)",
    description: "Offering expert homeopathic consultations and personalized remedies to treat chronic and acute conditions safely and effectively.",
    image: "https://picsum.photos/seed/homeopathy-doctor-clinic/1600/1000",
    imageClass: ""
  }
];

const treatments = [
  {
    title: "Urticaria",
    description: "Urticaria, also known as hives, causes itchy red welts on the skin due to allergic reactions or immune responses. Homeopathic treatment helps reduce flare-ups and control symptoms naturally.",
    image: "https://picsum.photos/seed/urticaria/600/400"
  },
  {
    title: "Psoriasis",
    description: "Psoriasis is a chronic skin condition that causes red, scaly patches on the skin. Our homeopathic treatments focus on managing symptoms and improving skin health over time.",
    image: "https://picsum.photos/seed/psoriasis/600/400"
  },
  {
    title: "Ringworm",
    description: "Ringworm is a fungal skin infection that causes circular rashes and itching. Homeopathy helps eliminate the infection while strengthening the body’s natural healing response.",
    image: "https://picsum.photos/seed/ringworm/600/400"
  },
  {
    title: "Pimples",
    description: "Pimples and acne are common skin concerns caused by excess oil, bacteria, or hormonal changes. Homeopathic remedies help control breakouts and promote clearer skin.",
    image: "https://picsum.photos/seed/pimples/600/400"
  },
  {
    title: "Eczema",
    description: "Eczema causes dry, itchy, and inflamed skin. Homeopathic treatment helps soothe irritation and reduce recurring flare-ups.",
    image: "https://picsum.photos/seed/eczema/600/400"
  },
  {
    title: "Cracked Skin",
    description: "Cracked or excessively dry skin can cause discomfort and irritation. Our homeopathic treatments help restore moisture balance and promote skin healing.",
    image: "https://picsum.photos/seed/cracked-skin/600/400"
  }
];

const whyChooseUs = [
  {
    title: "Experienced Doctors",
    description: "Our specialists provide personalized homeopathic treatment plans based on each patient’s health condition and medical history."
  },
  {
    title: "Specialized Treatment Areas",
    description: "We provide expert care for skin diseases, hair fall problems, allergies, female disorders, and infertility using safe and natural homeopathic remedies."
  },
  {
    title: "General Physician Care",
    description: "The clinic also treats common health conditions such as fever, cold, infections, and other general health problems."
  },
  {
    title: "Two Dedicated OPD Rooms",
    description: "The clinic includes two OPD consultation rooms designed to ensure smooth patient flow and comfortable medical consultations."
  },
  {
    title: "Doctor Consultation Cabin",
    description: "A separate doctor’s cabin is available for detailed consultations and personalized patient care."
  },
  {
    title: "Clean and Hygienic Environment",
    description: "Our clinic maintains high standards of cleanliness and hygiene to ensure a safe and comfortable healthcare experience."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Aarti Sharma",
    date: "2023-11-22",
    image: "https://picsum.photos/seed/patient1/100/100",
    text: "I suffered from severe eczema for years, but Dr. Vrutika's homeopathic treatment worked wonders. My skin is finally clear and healthy without any side effects. Highly recommended!",
  },
  {
    id: 2,
    name: "Rahul Desai",
    date: "2024-01-15",
    image: "https://picsum.photos/seed/patient2/100/100",
    text: "Dr. Shreyansh is an excellent family physician. He treated my chronic allergies with a personalized approach. The clinic is very clean and the staff is incredibly supportive.",
  },
  {
    id: 3,
    name: "Priya Patel",
    date: "2024-02-05",
    image: "https://picsum.photos/seed/patient3/100/100",
    text: "I was experiencing severe hair fall and tried many treatments before coming to Sattva Clinic. The homeopathic remedies provided here have significantly reduced my hair fall and improved my overall health.",
  },
  {
    id: 4,
    name: "Amit Mehta",
    date: "2023-10-10",
    image: "https://picsum.photos/seed/patient4/100/100",
    text: "The best homeopathic clinic in Ahmedabad! They successfully treated my psoriasis when other treatments failed. The doctors are very patient and listen to all your concerns carefully.",
  }
];

const faqs = [
  {
    question: "What services do you provide at Sattva Homeopathic Clinic?",
    answer: "We offer expert homeopathic consultations and personalized remedies for a wide range of conditions, as well as general family physician services."
  },
  {
    question: "How can I book an appointment with Dr. Shreyansh or Dr. Vrutika?",
    answer: "You can book an appointment by calling us directly, sending a message through our contact form, or visiting our clinic during opening hours."
  },
  {
    question: "Which chronic conditions can be treated with Homeopathy?",
    answer: "Homeopathy is effective for many chronic conditions including skin disorders, respiratory allergies, digestive issues, and joint problems."
  },
  {
    question: "Do you provide specialized treatment for Skin and Hair disorders?",
    answer: "Yes, we specialize in treating skin conditions like psoriasis, eczema, and acne, as well as various hair fall problems using natural homeopathic remedies."
  },
  {
    question: "What makes Sattva Clinic different from others clinic?",
    answer: "We combine the expertise of a Family Physician and a Homeopathic Consultant to provide comprehensive, root-cause focused healthcare in a modern, hygienic environment."
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setTestimonialSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevTestimonial = () => {
    setTestimonialSlide((prev) => (prev === 0 ? Math.max(0, testimonials.length - 3) : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      {/* Section 1: Top Information Bar */}
      <div className="bg-[#004655] text-white py-2 px-4 md:px-8 text-sm hidden lg:flex justify-between items-center">
        <div className="flex items-center space-x-2 max-w-2/3">
          <MapPin size={16} className="shrink-0 text-[#F58220]" />
          <span className="truncate">B/h, Reliance Petrol Pump, 109, 1st Floor, Maruti Sky, Om Circle, Sardar Patel Ring Rd, Vastral, Ahmedabad, Gujarat 382418</span>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-[#F58220]" />
            <span className="font-medium">6355294826</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-[#F58220] transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-[#F58220] transition-colors"><Youtube size={16} /></a>
            <a href="#" className="hover:text-[#F58220] transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Section 2: Main Navigation Header */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1KEbEPgEenUDamGGVZr8h1sv4UXQtIU4B" 
              alt="Sattva Clinic Logo - Homeopathic and Family Physician Clinic" 
              className="h-16 md:h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            {['Home', 'About Clinic', 'Specializations', 'Gallery', 'Blog', 'Contact Us'].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-[#004655] font-medium transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <button className="bg-[#F58220] hover:bg-[#d97018] text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors shadow-md">
            <Calendar size={18} />
            <span>Book An Appointment</span>
          </button>
        </div>
      </header>

      {/* Section 3: Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 flex-grow flex flex-col overflow-hidden">
        <div className="flex flex-col md:flex-row w-full flex-grow relative">
          
          {/* Left Column */}
          <div className="w-full md:w-1/2 lg:w-5/12 py-16 px-6 md:pl-12 lg:pl-24 flex flex-col justify-center z-20">
            <div className="transition-opacity duration-500">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {slides[currentSlide].heading} <br className="hidden md:block" />
                <span className="text-[#004655]">{slides[currentSlide].highlight}</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                {slides[currentSlide].subheading}
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              <button className="self-start bg-[#004655] hover:bg-[#003340] text-white px-10 py-4 font-medium transition-colors shadow-md text-lg">
                Consult Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 lg:w-7/12 h-[400px] md:h-auto relative">
            {/* Gradient overlay for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 hidden md:block"></div>
            
            {slides.map((slide, index) => (
              <img 
                key={slide.id}
                src={slide.image} 
                alt={slide.highlight} 
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                } ${slide.imageClass}`}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentSlide ? 'bg-[#004655]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* Section 4: Quick Contact Features Ribbon */}
      <section className="bg-white py-12 border-t border-gray-100 shadow-sm relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            <div className="flex flex-col items-center text-center pt-6 md:pt-0 group cursor-pointer">
              <div className="w-20 h-20 rounded-full border-[3px] border-[#004655] flex items-center justify-center mb-5 text-[#004655] group-hover:bg-[#004655] group-hover:text-white transition-colors duration-300">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[#004655] font-semibold text-xl">Give Us A Call</h3>
            </div>

            <div className="flex flex-col items-center text-center pt-6 md:pt-0 group cursor-pointer">
              <div className="w-20 h-20 rounded-full border-[3px] border-[#004655] flex items-center justify-center mb-5 text-[#004655] group-hover:bg-[#004655] group-hover:text-white transition-colors duration-300">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[#004655] font-semibold text-xl">Send Us A Message</h3>
            </div>

            <div className="flex flex-col items-center text-center pt-6 md:pt-0 group cursor-pointer">
              <div className="w-20 h-20 rounded-full border-[3px] border-[#004655] flex items-center justify-center mb-5 text-[#004655] group-hover:bg-[#004655] group-hover:text-white transition-colors duration-300">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-[#004655] font-semibold text-xl">Reach us</h3>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3.5: Three-Column Information Section */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row w-full">
          {/* Column 1 - Our Doctors */}
          <div className="w-full md:w-1/3 bg-[#004655] text-white p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Our Doctors</h3>
            <p className="text-white/90 mb-8 leading-relaxed">
              At Sattva Hospital, our experienced specialists Dr. Shreyansh Patel and Dr. Vrutika Patel provide compassionate, patient-centered care with modern medical techniques and personalized treatment plans.
            </p>
            <button className="self-start border-2 border-white hover:bg-white hover:text-[#004655] px-8 py-3 font-medium transition-colors">
              Read More
            </button>
          </div>

          {/* Column 2 - Emergency Service */}
          <div className="w-full md:w-1/3 bg-[#F58220] text-white p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
            <p className="text-white/90 mb-8 leading-relaxed">
              Our emergency services provide quick and reliable care for skin problems and general health conditions such as fever, cold, infections, and other urgent medical concerns.
            </p>
            <button className="self-start border-2 border-white hover:bg-white hover:text-[#F58220] px-8 py-3 font-medium transition-colors">
              Call Now
            </button>
          </div>

          {/* Column 3 - Opening Hours */}
          <div className="w-full md:w-1/3 bg-[#004655] text-white p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Opening Hours</h3>
            <div className="flex justify-between items-center mb-4 text-lg">
              <span>Monday – Sunday</span>
              <span className="font-medium">09:00 AM – 09:00 PM</span>
            </div>
            <hr className="border-white/20 mb-8" />
            <button className="self-start border-2 border-[#F58220] text-[#F58220] hover:bg-[#F58220] hover:text-white px-8 py-3 font-medium transition-colors w-full text-center">
              Emergency Support Available
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Our Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004655] mb-6">Our Treatments</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Sattva Homeopathic Clinic, we provide safe and natural homeopathic treatments for common skin conditions. Our approach focuses on treating the root cause while improving overall skin health and immunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#004655] mb-3">{treatment.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {treatment.description}
                  </p>
                  <button className="text-[#F58220] font-semibold flex items-center space-x-2 hover:text-[#d97018] transition-colors group/btn">
                    <span>View Details</span>
                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004655] mb-6">Why Choose Sattva Homeopathic Clinic</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                At Sattva Homeopathic Clinic, we are committed to providing safe, natural, and effective treatment through classical homeopathy. Our clinic focuses on treating the root cause of health problems while ensuring a comfortable and hygienic environment for every patient.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle2 className="text-[#F58220] shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/modern-clinic-interior/1200/1400" 
                  alt="Sattva Clinic Interior" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6.5: FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://picsum.photos/seed/clinic-reception/1000/1400" 
                  alt="Sattva Clinic Reception" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004655] mb-6">FAQ</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Got questions? Find comprehensive answers and expert insights in our FAQ section, where we address your concerns about homeopathic treatments and family medicine, ensuring you feel informed and confident in your healthcare journey.
              </p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="overflow-hidden rounded-lg shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center p-5 bg-[#004655] text-white text-left font-medium hover:bg-[#003340] transition-colors"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown 
                        size={20} 
                        className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className={`bg-gray-50 px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                        openFaq === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: Patient Testimonials */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h4 className="text-[#F58220] font-medium text-lg mb-2">Testimonial</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#004655] mb-4">Patient Trust In Us</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Hear from our satisfied patients! Visit our testimonials section to read inspiring stories and experiences from those who have trusted Sattva Homeopathic Clinic for their care.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-[#004655] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-[#004655] transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden px-2 py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialSlide * (100 / 3)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-xs text-gray-400">{testimonial.date}</p>
                          </div>
                        </div>
                        {/* Google G Logo SVG */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>

                      {/* Rating */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-[#FFB800] text-[#FFB800]" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <div className="relative flex-grow">
                        <p className="text-gray-700 leading-relaxed line-clamp-4">
                          {testimonial.text}
                        </p>
                        {/* Fade out effect for overflow */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                      </div>
                      <button className="text-sm text-gray-400 hover:text-[#004655] text-left mt-2 transition-colors">
                        Read more
                      </button>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Website Footer */}
      <footer className="bg-[#004655] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Brand & About */}
            <div className="flex flex-col items-start">
              <img 
                src="https://lh3.googleusercontent.com/d/1KEbEPgEenUDamGGVZr8h1sv4UXQtIU4B" 
                alt="Sattva Clinic Logo - Homeopathic and Family Physician Clinic" 
                className="h-24 md:h-28 w-auto object-contain mb-6 bg-white/10 rounded p-2"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/80 leading-relaxed mb-8 font-sans">
                Sattva Clinic offers expert homeopathic care and general family medicine by Dr. Shreyansh Patel and Dr. Vrutika Patel. Trust us for comprehensive, patient-centered treatments for skin, hair, allergies, and female disorders.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#004655] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#004655] transition-colors">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#004655] transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start md:pl-8">
              <h3 className="text-[#F58220] font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'About Clinic', 'Specializations', 'Gallery', 'Blog', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/90 hover:text-[#F58220] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col items-start">
              <h3 className="text-[#F58220] font-bold text-xl mb-6">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <MapPin className="text-white shrink-0 mt-1" size={20} />
                  <span className="text-white/90 leading-relaxed">B/h, Reliance Petrol Pump, 109, 1st Floor, Maruti Sky, Om Circle, Sardar Patel Ring Rd, Vastral, Ahmedabad, Gujarat 382418</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Mail className="text-white shrink-0" size={20} />
                  <a href="mailto:info@sattvaclinic.in" className="text-white/90 hover:text-[#F58220] transition-colors">info@sattvaclinic.in</a>
                </li>
                <li className="flex items-center space-x-4">
                  <Phone className="text-[#F58220] shrink-0" size={20} />
                  <span className="text-[#F58220] font-medium">06355 294 826</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Clock className="text-white shrink-0" size={20} />
                  <span className="text-white/90">9:00 AM – 9:00 PM</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Sattva Homeopathic Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
