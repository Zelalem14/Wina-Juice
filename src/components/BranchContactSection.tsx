import React from 'react';
import { branchContacts } from '../data/menuData';
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export const BranchContactSection: React.FC = () => {
  return (
    <section id="branches-section" className="py-8 sm:py-12 px-3 sm:px-4 bg-stone-100/70 border-t border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2 sm:mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Addis Ababa Locations</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 font-serif">
            Visit or Order from Our 6 Branches
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1.5 sm:mt-2">
            Call your nearest Wina Juice branch directly for take-away preparation or inquiries. All phone numbers correspond directly to our official menu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {branchContacts.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-2xs hover:shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {branch.nameAm}
                    </span>
                    <h3 className="text-lg font-bold text-stone-800 mt-1">
                      {branch.nameEn} Branch
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-600 my-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Open Everyday: 7:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fresh Juices, Dine-In & Fast Takeaway</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                    Direct Phone
                  </span>
                  <span className="font-mono text-sm font-bold text-stone-800">
                    {branch.phone}
                  </span>
                </div>
                <a
                  href={branch.telUri}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Branch</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
