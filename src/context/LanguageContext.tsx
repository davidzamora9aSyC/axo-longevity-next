"use client"
// src/context/LanguageContext.jsx
import { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en")
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
