"use client";
import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialSlider from "./TestimonialSlider";

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
    const target = useRef(null);
    const inView = useInView(target, { margin: "-100px", once: true });

    return (
        <motion.section
            id="testimonials"
            className="min-h-screen w-full flex items-center justify-center outline-none"
        >
            <motion.div
                ref={target}
                style={{
                    y: inView ? "0%" : "50%",
                    opacity: inView ? 1 : 0,
                    transition:
                        "opacity 700ms ease-out, transform 700ms ease-out",
                }}
                className="w-full h-full min-h-[480px] flex items-center justify-center max-w-2xl"
            >
                <TestimonialSlider
                    testimonials={[
                        {
                            author: "John Doe",
                            message:
                                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, neque.",
                            designation: "CEO, Acme Industries",
                        },
                        {
                            author: "Jane Doe",
                            message: "Very good guy 1",
                            designation: "CEO, Acme Industries",
                        },
                        {
                            author: "John Doe 1",
                            message: "Very good guy 2",
                            designation: "CEO, Acme Industries",
                        },
                        {
                            author: "John Doe 2",
                            message: "Very good guy 3",
                            designation: "CEO, Acme Industries",
                        },
                    ]}
                />
            </motion.div>
        </motion.section>
    );
};

export default Testimonials;
