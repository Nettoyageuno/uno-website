import React, { useMemo, useState } from 'react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock, Send, Leaf, Shield } from 'lucide-react';
import GradientBackdrop from '../components/brand/GradientBackdrop';

type ServiceType =
  | 'office'
  | 'building'
  | 'warehouse'
  | 'post-construction'
  | 'maintenance'
  | 'specialized-addons'
  | 'duct-ventilation';

type Day = 'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'|'Sun';
type ScheduleKind = 'one-time' | 'weekly' | 'bi-weekly' | 'monthly' | 'quarterly' | null;

type FormData = {
  // Contact
  name: string;
  company?: string;
  email: string;
  phone: string;

  // Service basics
  service: ServiceType | '';
  sqft?: string;                  // hidden for duct/vent
  floorsServed?: number;
  notes?: string;

  // Schedule
  schedule: {
    kind: ScheduleKind;
    days: Day[];
    timesPerWeek: number | null;  // AUTO for weekly
    shifts: { day: boolean; night: boolean };
  };

  // Office
  restrooms?: number;
  kitchens?: number;
  conferenceRooms?: number;
  receptionAreas?: number;
  interiorWindows?: boolean;
  exteriorWindows?: boolean;
  highTouch?: boolean; // disinfection

  // Building/Condo
  lobbies?: number;
  entrances?: number;
  elevators?: number;
  stairwells?: number;
  mailrooms?: number;
  glassDoors?: boolean;

  // Warehouse/Industrial
  loadingDocks?: number;
  productionZones?: number;
  breakrooms?: number;
  machineAisles?: boolean;

  // Post-construction
  cleanupStage?: ('rough'|'final'|'turnkey')[];
  floorProtection?: boolean;
  constructionWindows?: boolean;

  // Floor care maintenance
  floorTypes?: ('vinyl'|'tile'|'carpet'|'concrete')[];
  stripWaxFreq?: 'monthly'|'quarterly'|'semi-annual'|'annual'|null;
  buffing?: boolean;
  carpetExtraction?: boolean;

  // Add-ons
  addons?: ('carpet'|'windows'|'pressure-wash'|'odor'|'disinfecting')[];
  // Duct & Vent
  hvacSystems?: number;
  lastDuctClean?: 'unknown'|'<6m'|'6-12m'|'1-3y'|'>3y'|null;
};

const FieldCard: React.FC<{label: string; help?: string; children: React.ReactNode}> = ({label, help, children}) => (
  <div className="rounded-xl border border-emerald-900/15 bg-white/90 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all">
    <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label>
    {children}
    {help && <p className="text-xs text-gray-500 mt-1">{help}</p>}
  </div>
);

const Stepper: React.FC<{value: number; onChange:(n:number)=>void; min?: number; max?: number}> =
({value, onChange, min=0, max=999}) => (
  <div className="inline-flex items-center rounded-lg border border-gray-300 overflow-hidden">
    <button type="button" className="px-3 py-1.5 hover:bg-gray-50" onClick={()=>onChange(Math.max(min, value-1))}>−</button>
    <div className="px-4 py-1.5 min-w-[3rem] text-center">{value}</div>
    <button type="button" className="px-3 py-1.5 hover:bg-gray-50" onClick={()=>onChange(Math.min(max, value+1))}>＋</button>
  </div>
);

const DayPill: React.FC<{day: Day; active: boolean; onToggle: () => void}> = ({day, active, onToggle}) => (
  <button
    type="button"
    onClick={onToggle}
    className={`px-3 py-1.5 rounded-full border text-sm ${active ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
  >
    {day}
  </button>
);

const FrequencySelector: React.FC<{
  value: { kind: ScheduleKind; days: Day[]; timesPerWeek: number | null; shifts: { day: boolean; night: boolean } };
  onChange: (v: { kind: ScheduleKind; days: Day[]; timesPerWeek: number | null; shifts: { day: boolean; night: boolean } }) => void;
}> = ({value, onChange}) => {
  const setKind = (k: ScheduleKind) => {
    // reset / auto-calc timesPerWeek for weekly
    const tpw = k === 'weekly' ? Math.max(1, (value.days?.length || 0)) : null;
    onChange({ ...value, kind: k, timesPerWeek: tpw });
  };

  const toggleDay = (d: Day) => {
    const set = new Set(value.days);
    set.has(d) ? set.delete(d) : set.add(d);
    const days = Array.from(set) as Day[];
    const tpw = value.kind === 'weekly' ? Math.max(1, days.length) : value.timesPerWeek;
    onChange({ ...value, days, timesPerWeek: tpw });
  };

  const toggleShift = (which: 'day'|'night') =>
    onChange({ ...value, shifts: { ...value.shifts, [which]: !value.shifts[which] } });

  return (
    <div className="space-y-4">
      <select className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
              value={value.kind ?? ''} onChange={e=>setKind((e.target.value || null) as ScheduleKind)}>
        <option value="">Select frequency…</option>
        <option value="one-time">One-time</option>
        <option value="weekly">Weekly</option>
        <option value="bi-weekly">Bi-Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
      </select>

      {(value.kind === 'weekly' || value.kind === 'bi-weekly') && (
        <div className="space-y-2">
          <p className="text-xs text-gray-500">Choose your service days.</p>
          <div className="flex flex-wrap gap-2">
            {(['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] as Day[]).map(d => (
              <DayPill key={d} day={d} active={value.days.includes(d)} onToggle={()=>toggleDay(d)} />
            ))}
          </div>

          {value.kind === 'weekly' && (
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 text-sm">
              <Clock className="w-4 h-4" /> Times per week: <strong>{Math.max(1, value.timesPerWeek ?? 1)}</strong> (auto)
            </div>
          )}
        </div>
      )}

      {!!value.kind && (
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm text-gray-700">Preferred shift(s):</span>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={value.shifts.day} onChange={()=>toggleShift('day')} /> Daytime
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={value.shifts.night} onChange={()=>toggleShift('night')} /> Nighttime
          </label>
        </div>
      )}
    </div>
  );
};

const labelForService = (s?: ServiceType | ''): string => {
  switch (s) {
    case 'office': return 'Office & Corporate Cleaning';
    case 'building': return 'Building & Common Areas';
    case 'warehouse': return 'Warehouse & Industrial';
    case 'post-construction': return 'Post-Construction';
    case 'maintenance': return 'Floor Care & Maintenance';
    case 'specialized-addons': return 'Specialized Add-Ons';
    case 'duct-ventilation': return 'Duct & Ventilation Cleaning';
    default: return '';
  }
};

const GetQuotePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name:'', company:'', email:'', phone:'',
    service:'', sqft:'', floorsServed: 0, notes:'',
    schedule: { kind: null, days: [], timesPerWeek: null, shifts: { day:false, night:false } },
    // defaults
    restrooms:0, kitchens:0, conferenceRooms:0, receptionAreas:0,
    interiorWindows:false, exteriorWindows:false, highTouch:false,
    lobbies:0, entrances:0, elevators:0, stairwells:0, mailrooms:0, glassDoors:false,
    loadingDocks:0, productionZones:0, breakrooms:0, machineAisles:false,
    cleanupStage:[], floorProtection:false, constructionWindows:false,
    floorTypes:[], stripWaxFreq:null, buffing:false, carpetExtraction:false,
    addons:[], hvacSystems:0, lastDuctClean:null
  });

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setFormData(prev => ({ ...prev, [key]: value }));

  const summarySchedule = useMemo(() => {
    const s = formData.schedule;
    if (!s.kind) return '—';
    let base = s.kind.replace('-', ' ');
    if (s.kind === 'weekly') {
      const times = Math.max(1, s.timesPerWeek ?? 1);
      const days = s.days.length ? ` (${s.days.join(', ')})` : '';
      base = `Weekly — ${times}x${days}`;
    } else if (s.kind === 'bi-weekly') {
      const days = s.days.length ? ` (${s.days.join(', ')})` : '';
      base = `Bi-Weekly${days}`;
    }
    const shiftTokens = [s.shifts.day && 'Day', s.shifts.night && 'Night'].filter(Boolean).join(' + ');
    return shiftTokens ? `${base} — ${shiftTokens}` : base;
  }, [formData.schedule]);

  const ServiceExtras = () => {
    const s = formData.service;
    if (!s) return null;
    const setNum = (k: keyof FormData) => (n:number)=> update(k as any, n);

    switch (s) {
      // OFFICE: map to page bullets (restrooms, kitchens, conference rooms, reception, windows, high-touch)
      case 'office':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldCard label="Bathrooms"><Stepper value={formData.restrooms||0} onChange={setNum('restrooms')} /></FieldCard>
            <FieldCard label="Kitchens / breakrooms"><Stepper value={formData.kitchens||0} onChange={setNum('kitchens')} /></FieldCard>
            <FieldCard label="Conference rooms"><Stepper value={formData.conferenceRooms||0} onChange={setNum('conferenceRooms')} /></FieldCard>
            <FieldCard label="Reception areas"><Stepper value={formData.receptionAreas||0} onChange={setNum('receptionAreas')} /></FieldCard>
            <FieldCard label="Windows">
              <div className="flex gap-4">
                <label className="inline-flex items-center gap-2"><input type="checkbox" checked={!!formData.interiorWindows} onChange={e=>update('interiorWindows', e.target.checked)} />Interior</label>
                <label className="inline-flex items-center gap-2"><input type="checkbox" checked={!!formData.exteriorWindows} onChange={e=>update('exteriorWindows', e.target.checked)} />Exterior</label>
              </div>
            </FieldCard>
            <FieldCard label="High-touch disinfection">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.highTouch} onChange={e=>update('highTouch', e.target.checked)} /> Include touchpoint disinfection
              </label>
            </FieldCard>
          </div>
        );

      // BUILDING/CONDO: lobbies, entrances, elevators, stairwells, mailrooms, glass/doors
      case 'building':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldCard label="Lobbies"><Stepper value={formData.lobbies||0} onChange={setNum('lobbies')} /></FieldCard>
            <FieldCard label="Entrances"><Stepper value={formData.entrances||0} onChange={setNum('entrances')} /></FieldCard>
            <FieldCard label="Elevators"><Stepper value={formData.elevators||0} onChange={setNum('elevators')} /></FieldCard>
            <FieldCard label="Stairwells"><Stepper value={formData.stairwells||0} onChange={setNum('stairwells')} /></FieldCard>
            <FieldCard label="Mailrooms"><Stepper value={formData.mailrooms||0} onChange={setNum('mailrooms')} /></FieldCard>
            <FieldCard label="Glass & entrance doors">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.glassDoors} onChange={e=>update('glassDoors', e.target.checked)} /> Include glass/door detailing
              </label>
            </FieldCard>
          </div>
        );

      // WAREHOUSE/INDUSTRIAL: docks, zones, breakrooms, machine aisles
      case 'warehouse':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldCard label="Loading docks"><Stepper value={formData.loadingDocks||0} onChange={setNum('loadingDocks')} /></FieldCard>
            <FieldCard label="Production zones"><Stepper value={formData.productionZones||0} onChange={setNum('productionZones')} /></FieldCard>
            <FieldCard label="Breakrooms"><Stepper value={formData.breakrooms||0} onChange={setNum('breakrooms')} /></FieldCard>
            <FieldCard label="Machine aisles">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.machineAisles} onChange={e=>update('machineAisles', e.target.checked)} /> Include sweeping/scrubbing
              </label>
            </FieldCard>
          </div>
        );

      // POST-CONSTRUCTION: stages, floor protection, window detail
      case 'post-construction':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldCard label="Cleanup stage">
              <div className="flex flex-wrap gap-3">
                {(['rough','final','turnkey'] as const).map(opt => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input type="checkbox"
                      checked={!!formData.cleanupStage?.includes(opt)}
                      onChange={(e)=>{
                        const set = new Set(formData.cleanupStage||[]);
                        e.target.checked ? set.add(opt) : set.delete(opt);
                        update('cleanupStage', Array.from(set) as any);
                      }}/>
                    {opt[0].toUpperCase()+opt.slice(1)}
                  </label>
                ))}
              </div>
            </FieldCard>
            <FieldCard label="Protect finished floors?">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.floorProtection} onChange={e=>update('floorProtection', e.target.checked)} /> Include Ram Board/plastic
              </label>
            </FieldCard>
            <FieldCard label="Windows & sticker removal">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.constructionWindows} onChange={e=>update('constructionWindows', e.target.checked)} /> Include detail window work
              </label>
            </FieldCard>
          </div>
        );

      // FLOOR CARE & MAINTENANCE
      case 'maintenance':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldCard label="Floor types">
              <div className="flex flex-wrap gap-3">
                {(['vinyl','tile','carpet','concrete'] as const).map(ft => (
                  <label key={ft} className="inline-flex items-center gap-2">
                    <input type="checkbox"
                      checked={!!formData.floorTypes?.includes(ft)}
                      onChange={(e)=>{
                        const set = new Set(formData.floorTypes||[]);
                        e.target.checked ? set.add(ft) : set.delete(ft);
                        update('floorTypes', Array.from(set) as any);
                      }}/>
                    {ft[0].toUpperCase()+ft.slice(1)}
                  </label>
                ))}
              </div>
            </FieldCard>
            <FieldCard label="Strip & wax frequency">
              <select className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                      value={formData.stripWaxFreq || ''} onChange={e=>update('stripWaxFreq', (e.target.value || null) as any)}>
                <option value="">Select…</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="semi-annual">Semi-annual</option>
                <option value="annual">Annual</option>
              </select>
            </FieldCard>
            <FieldCard label="Buffing / burnishing">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.buffing} onChange={e=>update('buffing', e.target.checked)} /> Include high-gloss maintenance
              </label>
            </FieldCard>
            <FieldCard label="Carpet extraction">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={!!formData.carpetExtraction} onChange={e=>update('carpetExtraction', e.target.checked)} /> Include hot-water extraction
              </label>
            </FieldCard>
          </div>
        );

      // SPECIALIZED ADD-ONS
      case 'specialized-addons':
        return (
          <FieldCard label="Add-ons">
            <div className="flex flex-wrap gap-3">
              {(['carpet','windows','pressure-wash','odor','disinfecting'] as const).map(a => (
                <label key={a} className="inline-flex items-center gap-2">
                  <input type="checkbox"
                    checked={!!formData.addons?.includes(a)}
                    onChange={(e)=>{
                      const set = new Set(formData.addons||[]);
                      e.target.checked ? set.add(a) : set.delete(a);
                      update('addons', Array.from(set) as any);
                    }}/>
                  {a === 'pressure-wash' ? 'Pressure washing' : a[0].toUpperCase()+a.slice(1)}
                </label>
              ))}
            </div>
          </FieldCard>
        );

      // DUCT & VENTILATION
      case 'duct-ventilation':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldCard label="Number of HVAC systems (AHU/RTU)">
              <Stepper value={formData.hvacSystems || 0} onChange={(n)=>update('hvacSystems', n)} />
            </FieldCard>
            <FieldCard label="Last duct cleaning">
              <select className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
                      value={formData.lastDuctClean || ''} onChange={e=>update('lastDuctClean', (e.target.value || null) as any)}>
                <option value="">Select…</option>
                <option value="unknown">Unknown</option>
                <option value="<6m">Within 6 months</option>
                <option value="6-12m">6–12 months</option>
                <option value="1-3y">1–3 years</option>
                <option value=">3y">Over 3 years</option>
              </select>
            </FieldCard>
          </div>
        );
    }
    return null;
  };

  const Review = () => (
    <aside className="space-y-4">
      <div className="rounded-xl border border-emerald-900/15 bg-white/90 p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Review</h3>
        <dl className="text-sm space-y-2">
          <div className="flex justify-between"><dt className="text-gray-600">Service</dt><dd className="text-gray-900">{labelForService(formData.service) || '—'}</dd></div>
          {formData.service !== 'duct-ventilation' && (
            <div className="flex justify-between"><dt className="text-gray-600">Approx. area</dt><dd className="text-gray-900">{formData.sqft || '—'}</dd></div>
          )}
          <div className="flex justify-between"><dt className="text-gray-600">Schedule</dt><dd className="text-gray-900">
            {formData.schedule.kind ? (
              <>
                {formData.schedule.kind === 'weekly' && <>Weekly — {Math.max(1, formData.schedule.timesPerWeek ?? 1)}x</>}
                {formData.schedule.kind === 'bi-weekly' && <>Bi-Weekly</>}
                {formData.schedule.kind === 'monthly' && <>Monthly</>}
                {formData.schedule.kind === 'quarterly' && <>Quarterly</>}
                {formData.schedule.kind === 'one-time' && <>One-time</>}
                {formData.schedule.days.length ? <> ({formData.schedule.days.join(', ')})</> : null}
                {formData.schedule.shifts.day || formData.schedule.shifts.night ? <> — {(formData.schedule.shifts.day && 'Day') || ''}{(formData.schedule.shifts.day && formData.schedule.shifts.night) ? ' + ' : ''}{(formData.schedule.shifts.night && 'Night') || ''}</> : null}
              </>
            ) : '—'}
          </dd></div>
        </dl>
        <p className="text-xs text-gray-500 mt-3"><Leaf className="inline h-3.5 w-3.5 mr-1 text-emerald-600" /> Eco-friendly products available on request.</p>
      </div>

      <div className="rounded-xl border border-emerald-900/20 bg-emerald-50 p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emerald-700 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-emerald-800">Our Guarantee</h4>
            <ul className="text-xs text-emerald-900/90 list-disc ml-4 mt-1 space-y-1">
              <li>24-hour follow-up after your site visit</li>
              <li>Custom plan that fits your schedule</li>
              <li>Transparent pricing, no pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks! We\'ll follow up within 24 hours to schedule your site visit.');
  };

  return (
    <div className="bg-warm">
      <SEO title="Request a Site Visit & Quote | Nettoyage Uno" description="Tell us about your facility and schedule preferences. We'll prepare a tailored commercial cleaning proposal after a quick on-site assessment." />
      
      {/* Hero Section */}
      <section className="relative uno-hero uno-noise py-16">
        <GradientBackdrop />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Request a Site Visit & Quote
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Share a few details below. We'll confirm a visit and send a custom plan—no pressure, just clear pricing.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={submit} className="lg:col-span-2 space-y-6">
            {/* Contact Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldCard label="Full name">
                  <input className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" value={formData.name} onChange={e=>update('name', e.target.value)} placeholder="Jane Doe" />
                </FieldCard>
                <FieldCard label="Company">
                  <input className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" value={formData.company || ''} onChange={e=>update('company', e.target.value)} placeholder="Your business" />
                </FieldCard>
                <FieldCard label="Email address">
                  <input type="email" className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" value={formData.email} onChange={e=>update('email', e.target.value)} placeholder="name@company.com" />
                </FieldCard>
                <FieldCard label="Phone number">
                  <input className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" value={formData.phone} onChange={e=>update('phone', e.target.value)} placeholder="(514) 000-0000" />
                </FieldCard>
              </div>
            </div>

            {/* Service Details Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Details</h2>
              
              {/* Service Type */}
              <div className="mb-6">
                <FieldCard label="Service type" help="Choose the service that best matches your need.">
                  <select className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" value={formData.service} onChange={e=>update('service', e.target.value as ServiceType | '')}>
                    <option value="">Select a service…</option>
                    <option value="office">Office & Corporate Cleaning</option>
                    <option value="building">Building & Common Areas</option>
                    <option value="warehouse">Warehouse & Industrial</option>
                    <option value="post-construction">Post-Construction</option>
                    <option value="specialized-addons">Specialized Add-Ons</option>
                    <option value="duct-ventilation">Duct & Ventilation Cleaning</option>
                  </select>
                </FieldCard>
              </div>

              {/* Core details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {formData.service !== 'duct-ventilation' && (
                  <FieldCard label="Approx. area (sq ft)" help="A rough estimate is fine.">
                    <input type="number" inputMode="numeric" className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" placeholder="e.g., 5,000" value={formData.sqft || ''} onChange={e=>update('sqft', e.target.value)} />
                  </FieldCard>
                )}
                <FieldCard label="Floors served (if applicable)">
                  <Stepper value={formData.floorsServed || 0} onChange={(n)=>update('floorsServed', n)} />
                </FieldCard>
              </div>

              {/* Frequency & shifts */}
              <FieldCard label="How often?">
                <FrequencySelector value={formData.schedule} onChange={(v)=>update('schedule', v)} />
              </FieldCard>
            </div>

            {/* Service-specific details */}
            {formData.service && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Specifications</h2>
                <ServiceExtras />
              </div>
            )}

            {/* Additional Information Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <FieldCard label="Notes / extras" help="Anything we should know (site access, hours, special requests).">
                <textarea rows={4} className="w-full rounded-lg border-gray-300 focus:border-emerald-600 focus:ring-emerald-600" value={formData.notes || ''} onChange={e=>update('notes', e.target.value)} placeholder="Add details…" />
              </FieldCard>
            </div>

            {/* Submit Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex gap-3">
                <button type="submit" className="btn-cta inline-flex items-center px-6 py-3 text-base font-medium">
                  <Send className="w-4 h-4 mr-2" /> Send Request
                </button>
                <span className="inline-flex items-center rounded-md bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
                  <Clock className="w-4 h-4 mr-1" />Response within 24h of site visit
                </span>
              </div>
            </div>
          </form>

          <div className="lg:col-span-1">
            <Review />
            <aside className="mt-6 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-gray-700"><Phone className="w-4 h-4 text-emerald-600" /> (514) xxx-xxxx</li>
                <li className="flex items-center gap-2 text-gray-700"><Mail className="w-4 h-4 text-emerald-600" /> info@nettoyageuno.com</li>
                <li className="flex items-center gap-2 text-gray-700"><MapPin className="w-4 h-4 text-emerald-600" /> Montréal & surrounding areas</li>
              </ul>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetQuotePage;
