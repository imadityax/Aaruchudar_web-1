"use client";
import React from "react";

type JobCardProps = {
  title: string;
  type: string;
  workMode: string;
  package: string;
  hours?: string;
  locations: string[];
  eligibility?: string;
  experience?: string;
  benefits?: string[];
  responsibilities?: string[];
  highlight?: boolean;
};

export default function JobCard(props: JobCardProps) {
  const {
    title,
    type,
    workMode,
    package: pkg,
    hours,
    locations,
    eligibility,
    experience,
    benefits,
    responsibilities,
    highlight,
  } = props;

  return (
    <div
      className={
        "group rounded-2xl border bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all " +
        (highlight ? "border-indigo-300" : "border-slate-200")
      }
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-lg font-semibold text-slate-900">
            {title}
          </h4>
          <a
            href="#apply"
            className="inline-flex items-center rounded-full bg-indigo-600 text-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-indigo-700 transition-colors"
          >
            Apply
          </a>
        </div>

        <div className="mt-2 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1">{type}</span>
          <span className="mx-2">•</span>
          <span>{workMode}</span>
          {hours && (
            <>
              <span className="mx-2">•</span>
              <span>{hours}</span>
            </>
          )}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700">
          <div>
            <span className="font-medium text-slate-800">Package:</span> {pkg}
          </div>
          {experience && (
            <div>
              <span className="font-medium text-slate-800">Experience:</span> {experience}
            </div>
          )}
          {eligibility && (
            <div>
              <span className="font-medium text-slate-800">Eligibility:</span> {eligibility}
            </div>
          )}
          <div>
            <span className="font-medium text-slate-800">Locations:</span> {locations.join(", ")}
          </div>
        </div>

        {(benefits?.length || responsibilities?.length) && (
          <div className="mt-4 grid gap-3">
            {benefits?.length ? (
              <div>
                <div className="text-sm font-medium text-slate-800">Benefits</div>
                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                  {benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {responsibilities?.length ? (
              <div>
                <div className="text-sm font-medium text-slate-800">Responsibilities</div>
                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                  {responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
