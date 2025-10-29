"use client";

import { motion } from "framer-motion";
import { FileText, Award, Calendar } from "lucide-react";

export default function Patents() {
  const patents = [
    {
      id: 1,
      title: "System for Lung Nodule Detection Using AI and Deep Learning",
      patentNumber: "Application No. 202541013900 A",
      status: "Published",
      date: "28 February 2025",
      description:
        "An AI-powered system designed to assist in the automated detection and classification of lung nodules from CT scan images. Integrates Convolutional Neural Networks (CNNs), Region Proposal Networks (RPNs), and 3D CNNs to automatically pre-process CT images, identify candidate regions, and classify nodules as benign or malignant. The system continuously improves through feedback from radiologists, offers automated alerts, and supports integration into clinical workflows, ensuring timely medical intervention. Compliant with HIPAA and GDPR regulatory standards.",
      inventors: ["Anurag Varma Thippani", "SR University"],
      field: "Artificial Intelligence, Medical Imaging, Deep Learning",
    },
    // Add more patents as needed
  ];

  return (
    <section id="patents" className="py-20 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Patents & <span className="gradient-text">Innovations</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Intellectual property and innovative solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <FileText className="text-primary" size={32} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold gradient-text">
                        {patent.title}
                      </h3>
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-semibold">
                        <Award size={16} />
                        {patent.status}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                      <span className="font-semibold">
                        {patent.patentNumber}
                      </span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{patent.date}</span>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {patent.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-foreground/60">Field: </span>
                        <span className="text-foreground font-medium">
                          {patent.field}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-foreground/60">Inventors: </span>
                        <span className="text-foreground font-medium">
                          {patent.inventors.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
