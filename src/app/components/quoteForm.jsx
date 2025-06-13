'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? 'Submitted successfully!' : 'Something went wrong.');
    } catch {
      setStatus('Error submitting form.');
    }
  };

  const Label = ({ text, required }) => (
    <label className="text-sm font-medium mb-1 block">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );

  const Input = ({ name, type = 'text', required = false }) => (
    <input name={name} type={type} required={required} onChange={handleChange} className="input input-bordered w-full" />
  );

  const Select = ({ name, options, required = false }) => (
    <select name={name} required={required} onChange={handleChange} className="select select-bordered w-full">
      <option disabled selected value="">--Select--</option>
      {options.map(opt => <option key={opt}>{opt}</option>)}
    </select>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Request a Glass Service Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label text="Inquiry Type" required />
          <Select name="serviceType" required options={["Auto Glass", "Residential Glass"]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Label text="First Name" required /><Input name="firstName" required /></div>
          <div><Label text="Last Name" required /><Input name="lastName" required /></div>
        </div>

        <div><Label text="Company Name" /><Input name="companyName" /></div>
        <div><Label text="Email" required /><Input name="email" type="email" required /></div>

        <div>
          <Label text="Preferred Contact Method" required />
          <Select name="preferredMethod" required options={["Email", "Primary Phone", "Secondary Phone"]} />
        </div>

        <div><Label text="Primary Phone" required /><Input name="primaryPhone" type="tel" required /></div>
        <div><Label text="Secondary Phone" /><Input name="secondaryPhone" type="tel" /></div>
        <div><Label text="Street Address" required /><Input name="address" required /></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Label text="City" required /><Input name="city" required /></div>
          <div><Label text="Zip Code" required /><Input name="zip" required /></div>
        </div>

        <div>
          <Label text="Describe your glass repair/replacement needs" required />
          <textarea name="description" required onChange={handleChange} className="textarea textarea-bordered w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><Label text="Car Year (if applicable)" /><Input name="carYear" /></div>
          <div><Label text="Car Make (if applicable)" /><Input name="carMake" /></div>
          <div><Label text="Car Model (if applicable)" /><Input name="carModel" /></div>
          <div>
            <Label text="Car Body Style (if applicable)" />
            <Select
              name="carBody"
              options={[
                "4 Door Sedan", "4 Door Hatchback", "SUV", "2 Door Coupe",
                "2 Door Convertible", "2 Door Hatchback", "4 Door Crew Cab Truck",
                "4 Door Extended Cab Truck", "2 Door Extended Cab Truck",
                "2 Door Single Cab Truck", "Van", "Mini Van", "Station Wagon"
              ]}
            />
          </div>
        </div>

        <div><Label text="Car VIN Number" /><Input name="vin" /></div>

        <p className="text-sm text-primary">
          <strong>ATTENTION DEAR CUSTOMER:</strong> For windshield and backglass replacements on 2016 and newer vehicles, the VIN is required to ensure the correct fit and specifications.
        </p>

        <button type="submit" className="btn bg-black text-white hover:bg-primary w-full">Submit</button>
        {status && <p className="text-sm pt-2 text-info">{status}</p>}
      </form>
    </div>
  );
}
