import { Head, useForm, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];

export default function Create({ auth, parrot }) {
    const { data, setData, post, processing, errors, clearErrors, setError } =
        useForm({
            parrot_id: parrot.id,
            applicant_name: auth.user.name,
            email: auth.user.email,
            phone: "",
            address: "",
            city: "",
            state: "",
            zip_code: "",
            country: "",
            has_bird_experience: null,
            no_experience_reason: "",
            experience: "",
            housing_type: "house",
            has_other_pets: false,
            other_pets_details: "",
            can_provide_medical_care: null,
            reason_for_adoption: "",
        });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const checkValidity = () => {
            if (!data.applicant_name || !data.email || !data.phone)
                return false;
            if (
                !data.address ||
                !data.city ||
                !data.state ||
                !data.zip_code ||
                !data.country
            )
                return false;
            if (data.has_bird_experience === null) return false;

            if (data.has_bird_experience === true && !data.experience)
                return false;
            if (
                data.has_bird_experience === false &&
                !data.no_experience_reason
            )
                return false;

            if (data.has_other_pets && !data.other_pets_details) return false;

            if (data.can_provide_medical_care === null) return false;

            if (!data.reason_for_adoption) return false;

            return true;
        };
        setIsFormValid(checkValidity());
    }, [data]);

    const handleInputChange = (field, value) => {
        // Enforce numeric only for phone and zip_code
        if (field === "phone" || field === "zip_code") {
            if (value && !/^\d*$/.test(value)) {
                return; // Ignore non-numeric input
            }
        }

        setData(field, value);

        // If value becomes empty, show error
        if (typeof value === "string" && value.trim() === "") {
            setError(field, "This field is required");
        } else if (errors[field]) {
            clearErrors(field);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        // Perform full validation on submit
        let hasErrors = false;
        const requiredFields = [
            "applicant_name",
            "email",
            "phone",
            "address",
            "city",
            "state",
            "zip_code",
            "country",
            "reason_for_adoption",
        ];

        requiredFields.forEach((field) => {
            if (
                !data[field] ||
                (typeof data[field] === "string" && !data[field].trim())
            ) {
                setError(field, "This field is required");
                hasErrors = true;
            }
        });

        if (data.has_bird_experience === null) {
            setError("has_bird_experience", "Please select an option");
            hasErrors = true;
        } else if (
            data.has_bird_experience === true &&
            (!data.experience || !data.experience.trim())
        ) {
            setError("experience", "This field is required");
            hasErrors = true;
        } else if (
            data.has_bird_experience === false &&
            (!data.no_experience_reason || !data.no_experience_reason.trim())
        ) {
            setError("no_experience_reason", "This field is required");
            hasErrors = true;
        }

        if (
            data.has_other_pets &&
            (!data.other_pets_details || !data.other_pets_details.trim())
        ) {
            setError("other_pets_details", "This field is required");
            hasErrors = true;
        }

        if (data.can_provide_medical_care === null) {
            setError("can_provide_medical_care", "Please select an option");
            hasErrors = true;
        }

        if (hasErrors) {
            // Scroll to top or first error could be nice, but simple validation is minimal requirement
            return;
        }

        post(route("applications.store"));
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] font-sans text-stone-800">
            <Head title={`Adopt ${parrot.name} | ParrotNest`} />
            <PublicNavbar auth={auth} />

            <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-50 to-transparent pointer-events-none" />
                <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none" />
                <div className="absolute top-40 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                            Application Form
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
                            Adopt a Friend
                        </h1>
                        <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
                            You are applying to adopt{" "}
                            <span className="font-bold text-emerald-700">
                                {parrot.name}
                            </span>
                            , results in a lifetime of love and companionship.
                            Please fill out the form below with care.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden"
                    >
                        {/* Header Banner */}
                        <div className="relative h-48 bg-stone-900 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-stone-900 opacity-90" />
                            {parrot.images && parrot.images.length > 0 ? (
                                <img
                                    src={`/storage/${parrot.images[0]}`}
                                    alt={parrot.name}
                                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                            )}
                            <div className="relative z-10 h-full flex flex-col justify-center px-10">
                                <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs mb-2">
                                    Selected Parrot
                                </span>
                                <h2 className="text-3xl font-serif font-bold text-white mb-1 flex items-center gap-3">
                                    {parrot.name}
                                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-sans font-bold uppercase tracking-wider border border-white/20">
                                        {parrot.species.name}
                                    </span>
                                </h2>
                                <p className="text-stone-300 text-sm max-w-lg">
                                    Please ensure you have read {parrot.name}'s
                                    profile fully before proceeding.
                                </p>
                            </div>
                        </div>

                        <form
                            onSubmit={submit}
                            className="p-8 md:p-12 space-y-12"
                        >
                            {/* Section 1: Personal Details */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-800">
                                        Personal Details
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="col-span-1">
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={data.applicant_name}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "applicant_name",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="Jane Doe"
                                        />
                                        {errors.applicant_name && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.applicant_name}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "email",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="jane@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "phone",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="(555) 123-4567"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <div className="border-t border-stone-100"></div>

                            {/* Section 2: Address Information */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xl">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-800">
                                        Address Information
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            value={data.address}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "address",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="1234 Parrot Lane"
                                        />
                                        {errors.address && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.address}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            value={data.city}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "city",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="San Francisco"
                                        />
                                        {errors.city && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.city}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            value={data.state}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "state",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="California"
                                        />
                                        {errors.state && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.state}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Zip / Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            value={data.zip_code}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "zip_code",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="94103"
                                        />
                                        {errors.zip_code && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.zip_code}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Country
                                        </label>
                                        <input
                                            list="countries-list"
                                            type="text"
                                            value={data.country}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "country",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400"
                                            placeholder="Select or type country"
                                        />
                                        <datalist id="countries-list">
                                            {COUNTRIES.map((country) => (
                                                <option
                                                    key={country}
                                                    value={country}
                                                />
                                            ))}
                                        </datalist>
                                        {errors.country && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.country}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <div className="border-t border-stone-100"></div>

                            {/* Section 3: Household & Experience */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-xl">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-800">
                                        Experience & Household
                                    </h3>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                                Do you have any past experience
                                                caring for parrots?
                                            </label>
                                            <div className="flex gap-4 mt-2">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="has_bird_experience"
                                                        value="yes"
                                                        checked={
                                                            data.has_bird_experience ===
                                                            true
                                                        }
                                                        onChange={() =>
                                                            handleInputChange(
                                                                "has_bird_experience",
                                                                true,
                                                            )
                                                        }
                                                        className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-emerald-500"
                                                    />
                                                    <span className="font-medium text-stone-700">
                                                        Yes
                                                    </span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="has_bird_experience"
                                                        value="no"
                                                        checked={
                                                            data.has_bird_experience ===
                                                            false
                                                        }
                                                        onChange={() =>
                                                            handleInputChange(
                                                                "has_bird_experience",
                                                                false,
                                                            )
                                                        }
                                                        className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-emerald-500"
                                                    />
                                                    <span className="font-medium text-stone-700">
                                                        No
                                                    </span>
                                                </label>
                                            </div>
                                            {errors.has_bird_experience && (
                                                <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                    ⚠{" "}
                                                    {errors.has_bird_experience}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            If you do not have any experience
                                            with birds, please explain why you
                                            are interested in adopting one.
                                        </label>
                                        <p className="text-xs text-stone-400 mb-3 ml-1">
                                            Be as detailed as possible so we get
                                            a good understanding of you interest
                                            in caring for one of our birds. Type
                                            N/A if the question does not apply
                                            to you. Please note responses as "I
                                            like birds" or one sentence answers
                                            are not considered a valid response
                                            to this question.
                                        </p>
                                        <textarea
                                            value={data.no_experience_reason}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "no_experience_reason",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400 min-h-[120px]"
                                            placeholder="I have always loved birds and have researched..."
                                        ></textarea>
                                        {errors.no_experience_reason && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.no_experience_reason}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Experience with Parrots
                                        </label>
                                        <p className="text-xs text-stone-400 mb-3 ml-1">
                                            Be as detailed as possible so we get
                                            a good understanding of you interest
                                            in caring for one of our birds. Type
                                            N/A if the question does not apply
                                            to you. Please note responses as "I
                                            like birds" or one sentence answers
                                            are not considered a valid response
                                            to this question.
                                        </p>
                                        <textarea
                                            value={data.experience}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "experience",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400 min-h-[120px]"
                                            placeholder="I have raised two Cockatiels previously..."
                                        ></textarea>
                                        {errors.experience && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.experience}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                                Housing Type
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={data.housing_type}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            "housing_type",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 appearance-none cursor-pointer"
                                                >
                                                    <option value="house">
                                                        House
                                                    </option>
                                                    <option value="apartment">
                                                        Apartment
                                                    </option>
                                                    <option value="condo">
                                                        Condo
                                                    </option>
                                                    <option value="other">
                                                        Other
                                                    </option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-400">
                                                    <svg
                                                        className="w-4 h-4 fill-current"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {errors.housing_type && (
                                                <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                    ⚠ {errors.housing_type}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Custom Checkbox Design */}
                                    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                        <div className="flex items-start gap-4">
                                            <div className="flex items-center h-5 mt-1">
                                                <input
                                                    type="checkbox"
                                                    id="has_other_pets"
                                                    checked={
                                                        data.has_other_pets
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            "has_other_pets",
                                                            e.target.checked,
                                                        )
                                                    }
                                                    className="w-5 h-5 text-emerald-600 border-stone-300 rounded focus:ring-emerald-500 cursor-pointer"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label
                                                    htmlFor="has_other_pets"
                                                    className="font-bold text-stone-800 cursor-pointer select-none"
                                                >
                                                    Do you have other pets?
                                                </label>
                                                <p className="text-xs text-stone-500 mt-1">
                                                    Include dogs, cats, or other
                                                    small animals.
                                                </p>

                                                {data.has_other_pets && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            height: "auto",
                                                        }}
                                                        className="mt-4"
                                                    >
                                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">
                                                            Pet Details
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={
                                                                data.other_pets_details
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    "other_pets_details",
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className="w-full bg-white border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700"
                                                            placeholder="A 5-year old Golden Retriever named Buddy"
                                                        />
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">
                                            Why do you want to adopt{" "}
                                            {parrot.name}?
                                        </label>
                                        <textarea
                                            value={data.reason_for_adoption}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "reason_for_adoption",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full bg-stone-50 border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-stone-700 placeholder-stone-400 min-h-[120px]"
                                            placeholder="We are looking for a companion..."
                                        ></textarea>
                                        {errors.reason_for_adoption && (
                                            <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1">
                                                ⚠ {errors.reason_for_adoption}
                                            </p>
                                        )}
                                    </div>

                                    {/* Medical Care Question */}
                                    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                        <label className="block text-sm font-bold text-stone-800 mb-3">
                                            Are you able to take this bird to an
                                            avian veterinarian for check-ups and
                                            provide adequate medical care?
                                        </label>

                                        <div className="flex gap-4 mb-4">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="can_provide_medical_care"
                                                    value="yes"
                                                    checked={
                                                        data.can_provide_medical_care ===
                                                        true
                                                    }
                                                    onChange={() =>
                                                        handleInputChange(
                                                            "can_provide_medical_care",
                                                            true,
                                                        )
                                                    }
                                                    className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-emerald-500"
                                                />
                                                <span className="font-medium text-stone-700">
                                                    Yes
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="can_provide_medical_care"
                                                    value="no"
                                                    checked={
                                                        data.can_provide_medical_care ===
                                                        false
                                                    }
                                                    onChange={() =>
                                                        handleInputChange(
                                                            "can_provide_medical_care",
                                                            false,
                                                        )
                                                    }
                                                    className="w-4 h-4 text-emerald-600 border-stone-300 focus:ring-emerald-500"
                                                />
                                                <span className="font-medium text-stone-700">
                                                    No
                                                </span>
                                            </label>
                                        </div>

                                        <p className="text-xs text-amber-700 bg-amber-50 p-4 rounded-xl border border-amber-100 font-medium leading-relaxed">
                                            <strong>Please be aware:</strong>{" "}
                                            Avian veterinarians can be hard to
                                            find. You may have to travel a long
                                            distance for an appointment.
                                            Check-ups and trims can cost
                                            hundreds of dollars per visit.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div className="flex items-center justify-between pt-6">
                                <Link
                                    href={route("parrots.show", parrot)}
                                    className="group flex items-center gap-2 text-stone-500 font-bold uppercase tracking-widest text-xs hover:text-stone-800 transition-colors px-4 py-3"
                                >
                                    <span>←</span> Cancel
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                                >
                                    {processing
                                        ? "Submitting..."
                                        : "Submit Application"}
                                    <span className="text-lg">➔</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    <p className="text-center text-stone-400 text-xs mt-8">
                        By submitting this application, you agree to
                        ParrotNest's Adoption Terms & Conditions.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
