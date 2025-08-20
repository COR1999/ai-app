"use client";

import React, { useState } from 'react';
import Form from '@/components/form';


export default function ContactPage() {
  
  return (  
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h1>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <Form></Form>
      </div>
    </div>
  </div>
  )
}