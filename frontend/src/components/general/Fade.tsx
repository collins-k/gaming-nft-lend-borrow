import React from 'react'
import { motion } from 'framer-motion'

export type FadeProps = {
    children: React.ReactNode
}

export default function Fade({ children }: FadeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}
