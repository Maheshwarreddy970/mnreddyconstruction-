import { motion } from 'framer-motion';
import { Building2, Hammer, PenTool, Users } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Construction Management',
    description: 'Expert oversight of your construction projects from start to finish.'
  },
  {
    icon: PenTool,
    title: 'Architecture & Design',
    description: 'Innovative designs that blend functionality with aesthetic appeal.'
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description: 'Transform existing spaces into modern, functional environments.'
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Professional guidance for your construction and renovation needs.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive construction and design services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;