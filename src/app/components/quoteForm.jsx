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
      if (res.ok) {
        setStatus('Submitted successfully!');
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      setStatus('Error submitting form.');
    }
  };

  const Label = ({ text, required }) => (
    <label className="text-sm font-medium mb-1 block">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Request a Glass Service Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label text="Inquiry Type" required={true} />
          <select name="serviceType" className="select select-bordered w-full" required onChange={handleChange}>
            <option disabled selected value="">--Select--</option>
            <option>Auto Glass</option>
            <option>Residential Glass</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="First Name" required={true} />
            <input name="firstName" onChange={handleChange} type="text" className="input input-bordered w-full" required />
          </div>
          <div>
            <Label text="Last Name" required={true} />
            <input name="lastName" onChange={handleChange} type="text" className="input input-bordered w-full" required />
          </div>
        </div>

        <div>
          <Label text="Company Name" />
          <input name="companyName" onChange={handleChange} type="text" className="input input-bordered w-full" />
        </div>

        <div>
          <Label text="Email" required={true} />
          <input name="email" onChange={handleChange} type="email" className="input input-bordered w-full" required />
        </div>

        <div>
          <Label text="Preferred Contact Method" required={true} />
          <select name="preferredMethod" onChange={handleChange} className="select select-bordered w-full" required>
            <option disabled selected value="">--Select--</option>
            <option>Email</option>
            <option>Primary Phone</option>
            <option>Secondary Phone</option>
          </select>
        </div>

        <div>
          <Label text="Primary Phone" required={true} />
          <input name="primaryPhone" onChange={handleChange} type="tel" className="input input-bordered w-full" required />
        </div>

        <div>
          <Label text="Secondary Phone" />
          <input name="secondaryPhone" onChange={handleChange} type="tel" className="input input-bordered w-full" />
        </div>

        <div>
          <Label text="Street Address" required={true} />
          <input name="address" onChange={handleChange} type="text" className="input input-bordered w-full" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="City" required={true} />
            <input name="city" onChange={handleChange} type="text" className="input input-bordered w-full" required />
          </div>
          <div>
            <Label text="Zip Code" required={true} />
            <input name="zip" onChange={handleChange} type="text" className="input input-bordered w-full" required />
          </div>
        </div>

        <div>
          <Label text="Glass Repair/Replacement Needs" required={true} />
          <textarea name="description" onChange={handleChange} className="textarea textarea-bordered w-full" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="Car Year" />
            <input name="carYear" onChange={handleChange} type="text" className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Car Make" />
            <input name="carMake" onChange={handleChange} type="text" className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Car Model" />
            <input name="carModel" onChange={handleChange} type="text" className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Car Body Style" />
            <select name="carBody" onChange={handleChange} className="select select-bordered w-full">
              <option disabled defaultValue={'None'} value="">--Select--</option>
              <option>4 Door Sedan</option>
              <option>4 Door Hatchback</option>
              <option>SUV</option>
              <option>2 Door Coupe</option>
              <option>2 Door Convertible</option>
              <option>2 Door Hatchback</option>
              <option>4 Door Truck</option>
              <option>2 Door Truck</option>
              <option>2 Door Extended Cab Truck</option>
              <option>2 Door Single Cab Truck</option>
              <option>Van</option>
              <option>Mini Van</option>
              <option>Station Wagon</option>
            </select>
          </div>
        </div>

        <div>
          <Label text="Car VIN Number" />
          <input name="vin" onChange={handleChange} type="text" className="input input-bordered w-full" />
        </div>

        <p className="text-sm text-warning">
          <strong>ATTENTION DEAR CUSTOMER:</strong> For windshield and backglass replacements on 2016 and newer vehicles, the VIN is required to ensure the correct fit and specifications.
        </p>

        <button type="submit" className="btn btn-primary w-full">Submit</button>
        {status && <p className="text-sm pt-2 text-info">{status}</p>}
      </form>
    </div>
  );
}