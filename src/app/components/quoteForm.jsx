'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'Submitted successfully!' : 'Something went wrong.');
      if (res.ok) e.target.reset();
    } catch {
      setStatus('Error submitting form.');
    }
  };

  const Label = ({ text, required }) => (
    <label className="text-sm font-medium mb-1 block">
      {text} {required && <span className="text-red-500">*</span>}
    </label>
  );

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Request a Glass Service Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label text="Inquiry Type" required />
          <select name="serviceType" required className="select select-bordered w-full" defaultValue="">
            <option value="" disabled>--Select--</option>
            <option value="Auto Glass">Auto Glass</option>
            <option value="Residential Glass">Residential Glass</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="First Name" required />
            <input name="firstName" type="text" required className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Last Name" required />
            <input name="lastName" type="text" required className="input input-bordered w-full" />
          </div>
        </div>

        <div>
          <Label text="Company Name" />
          <input name="companyName" type="text" className="input input-bordered w-full" />
        </div>

        <div>
          <Label text="Email" required />
          <input name="email" type="email" required className="input input-bordered w-full" />
        </div>

        <div>
          <Label text="Preferred Contact Method" required />
          <select name="preferredMethod" required className="select select-bordered w-full" defaultValue="">
            <option value="" disabled>--Select--</option>
            <option value="Email">Email</option>
            <option value="Primary Phone">Primary Phone</option>
            <option value="Secondary Phone">Secondary Phone</option>
          </select>
        </div>

        <div>
          <Label text="Primary Phone" required />
          <input name="primaryPhone" type="tel" required className="input input-bordered w-full" />
        </div>

        <div>
          <Label text="Secondary Phone" />
          <input name="secondaryPhone" type="tel" className="input input-bordered w-full" />
        </div>

        <div>
          <Label text="Street Address" required />
          <input name="address" type="text" required className="input input-bordered w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="City" required />
            <input name="city" type="text" required className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Zip Code" required />
            <input name="zip" type="text" required className="input input-bordered w-full" />
          </div>
        </div>

        <div>
          <Label text="Describe your glass repair/replacement needs" required />
          <textarea name="description" required className="textarea textarea-bordered w-full"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label text="Car Year (if applicable)" />
            <input name="carYear" type="text" className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Car Make (if applicable)" />
            <input name="carMake" type="text" className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Car Model (if applicable)" />
            <input name="carModel" type="text" className="input input-bordered w-full" />
          </div>
          <div>
            <Label text="Car Body Style (if applicable)" />
            <select name="carBody" className="select select-bordered w-full" defaultValue="">
              <option value="" disabled>--Select--</option>
              <option value="4 Door Sedan">4 Door Sedan</option>
              <option value="4 Door Hatchback">4 Door Hatchback</option>
              <option value="SUV">SUV</option>
              <option value="2 Door Coupe">2 Door Coupe</option>
              <option value="2 Door Convertible">2 Door Convertible</option>
              <option value="2 Door Hatchback">2 Door Hatchback</option>
              <option value="4 Door Crew Cab Truck">4 Door Crew Cab Truck</option>
              <option value="4 Door Extended Cab Truck">4 Door Extended Cab Truck</option>
              <option value="2 Door Extended Cab Truck">2 Door Extended Cab Truck</option>
              <option value="2 Door Single Cab Truck">2 Door Single Cab Truck</option>
              <option value="Van">Van</option>
              <option value="Mini Van">Mini Van</option>
              <option value="Station Wagon">Station Wagon</option>
            </select>
          </div>
        </div>

        <div>
          <Label text="Car VIN Number" />
          <input name="vin" type="text" className="input input-bordered w-full" />
        </div>

        <p className="text-sm text-red-700">
          <strong>ATTENTION DEAR CUSTOMER:</strong> For windshield and backglass replacements on 2016 and newer vehicles, the VIN is required to ensure the correct fit and specifications.
        </p>

        <button type="submit" className="btn bg-gray-700 text-white hover:bg-primary w-full">Submit</button>
        {status && <p className="text-sm pt-2 text-info">{status}</p>}
      </form>
    </div>
  );
}
