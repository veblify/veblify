import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  description: string;
  color: string;
}

const steps: WorkflowStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals and audience to craft a data-driven strategy that delivers measurable results.',
    color: 'bg-brand-black'
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Prototyping',
    description: 'Beautiful, conversion-focused designs that bring your brand to life and engage your target audience.',
    color: 'bg-brand-dark'
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Development',
    description: 'Clean code, modern technology, and rigorous testing ensure your website performs flawlessly across all devices.',
    color: 'bg-brand-surface'
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Launch & Grow',
    description: 'Smooth deployment with ongoing analytics, optimization, and support to maximize your digital success.',
    color: 'bg-brand-black'
  }
];

const StepCard: React.FC<{ step: WorkflowStep; index: number }> = ({ step, index }) => {
  return (
    <div 
      className={`sticky top-0 h-screen flex items-center justify-center p-6 md:p-12 ${step.color} border-t border-white/5`}
      style={{ zIndex: index + 1 }}
    >
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="font-display text-8xl md:text-[12rem] font-bold text-outline opacity-20 block leading-none mb-4">
            {step.number}
          </span>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-brand-accent mb-6 leading-tight">
            {step.title}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-brand-muted text-xl md:text-2xl leading-relaxed">
            {step.description}
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <div className="h-[1px] w-12 bg-brand-accent"></div>
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-brand-accent">Execution phase</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="relative bg-brand-black">
      <div className="py-24 md:py-32 px-6 md:px-12 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-brand-accent font-sans text-xs tracking-widest uppercase block mb-4">
              (04) The Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Workflow
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col">
        {steps.map((step, index) => (
          <StepCard key={step.id} step={step} index={index} />
        ))}
      </div>
      
      {/* Visual Transition Spacer */}
      <div className="h-32 bg-brand-black border-t border-white/5"></div>
    </section>
  );
};