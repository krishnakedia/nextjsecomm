"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Question {
  question: string
  answer: string
}

interface FAQAccordionProps {
  questions: Question[]
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="border border-vintage-ink/20 dark:border-vintage-ink-light/20">
          <button
            className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
            onClick={() => toggleQuestion(index)}
          >
            <span>{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 flex-shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 pt-0 border-t border-vintage-ink/20 dark:border-vintage-ink-light/20">
              <p className="text-vintage-ink/80 dark:text-vintage-ink-light/80">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

