# 🦜 ParrotNest - System Architecture

## Database Relationships Diagram

```
┌─────────────────┐
│     USERS       │
│─────────────────│
│ id              │
│ name            │◄───────────┐
│ email           │            │
│ password        │            │
│ created_at      │            │
└─────────────────┘            │
        ▲                      │
        │                      │
        │ user_id              │ reviewed_by
        │                      │
┌───────┴─────────────────────┴──────────────┐
│        ADOPTION_APPLICATIONS                │
│─────────────────────────────────────────────│
│ id                                          │
│ parrot_id ────────┐                        │
│ user_id           │                        │
│ applicant_name    │                        │
│ email, phone      │                        │
│ address info      │                        │
│ housing_type      │                        │
│ household_members │                        │
│ has_children      │                        │
│ has_other_pets    │                        │
│ bird_experience   │                        │
│ status            │                        │
│ admin_notes       │                        │
│ reviewed_by       │                        │
│ reviewed_at       │                        │
└───────────────────┴─────────────────────────┘
        │                          │
        │                          │ application_id
        │                          ▼
        │                 ┌─────────────────┐
        │                 │   ADOPTIONS     │
        │                 │─────────────────│
        │                 │ id              │
        │                 │ parrot_id       │
        │                 │ user_id         │
        │                 │ application_id  │
        │                 │ adoption_date   │
        │                 │ fee_paid        │
        │                 │ payment_method  │
        │                 │ follow_up_dates │
        │                 │ status          │
        │                 └─────────────────┘
        │ parrot_id              │
        ▼                        │ parrot_id
┌─────────────────┐             │
│    PARROTS      │◄────────────┘
│─────────────────│
│ id              │
│ species_id ─────┼──┐
│ name            │  │
│ age             │  │
│ gender          │  │
│ description     │  │
│ personality     │  │
│ health_status   │  │
│ special_needs   │  │
│ status          │  │
│ adoption_fee    │  │
│ images (JSON)   │  │
│ location        │  │
│ good_w_children │  │
│ good_w_birds    │  │
│ is_featured     │  │
└─────────────────┘  │
                     │ species_id
                     ▼
              ┌─────────────────┐
              │    SPECIES      │
              │─────────────────│
              │ id              │
              │ name            │
              │ scientific_name │
              │ description     │
              │ size            │
              │ lifespan        │
              │ noise_level     │
              │ care_required   │
              │ image           │
              │ is_active       │
              └─────────────────┘
```

## Application Flow

```
┌──────────────┐
│   VISITOR    │
└──────┬───────┘
       │
       ├─► Browse Parrots (/parrots)
       │   ├─► Filter by species, age, gender
       │   ├─► Search by name, description
       │   └─► View featured parrots
       │
       ├─► View Parrot Details (/parrots/{id})
       │   ├─► See full profile
       │   ├─► View images
       │   ├─► Check species info
       │   └─► Similar parrots
       │
       ├─► Browse Species (/species)
       │   └─► View available parrots per species
       │
       └─► Register/Login
               │
               ▼
       ┌──────────────┐
       │  AUTH USER   │
       └──────┬───────┘
              │
              ├─► Apply for Adoption (/apply/{parrot})
              │   ├─► Fill application form
              │   ├─► Submit references
              │   └─► Track status
              │
              ├─► My Applications (/my-applications)
              │   ├─► View all applications
              │   └─► Check status
              │
              └─► Dashboard (/dashboard)
                      │
                      └─► If Admin
                          ▼
                  ┌──────────────┐
                  │    ADMIN     │
                  └──────┬───────┘
                         │
                         ├─► Manage Parrots
                         │   ├─► Add/Edit/Delete
                         │   ├─► Upload images
                         │   └─► Update status
                         │
                         ├─► Manage Species
                         │   └─► Care information
                         │
                         ├─► Review Applications
                         │   ├─► Approve/Reject
                         │   ├─► Add notes
                         │   └─► Contact applicant
                         │
                         └─► Track Adoptions
                             ├─► Record adoption
                             ├─► Schedule follow-ups
                             └─► View statistics
```

## Technology Stack Layers

```
┌─────────────────────────────────────────────────────┐
│                 PRESENTATION LAYER                  │
│                                                     │
│  React 18 + Inertia.js + Tailwind CSS              │
│  ├─ Pages (JSX)                                     │
│  ├─ Components                                      │
│  └─ Tailwind Utilities                              │
│                                                     │
│  Filament PHP 4 (Admin Panel)                      │
│  ├─ Auto-generated Forms                            │
│  ├─ Data Tables                                     │
│  └─ Widgets & Dashboard                             │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                 APPLICATION LAYER                   │
│                                                     │
│  Laravel 12 (PHP Framework)                        │
│  ├─ Routes (web.php)                                │
│  ├─ Controllers                                     │
│  ├─ Middleware (Auth, CSRF, etc.)                   │
│  ├─ Validation                                      │
│  └─ Business Logic                                  │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                  DOMAIN LAYER                       │
│                                                     │
│  Eloquent Models                                   │
│  ├─ Species                                         │
│  ├─ Parrot                                          │
│  ├─ AdoptionApplication                             │
│  ├─ Adoption                                        │
│  └─ User                                            │
│                                                     │
│  Relationships                                     │
│  └─ BelongsTo, HasMany, etc.                        │
└─────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│                DATA PERSISTENCE LAYER               │
│                                                     │
│  MySQL Database (parrotnest)                       │
│  ├─ species table                                   │
│  ├─ parrots table                                   │
│  ├─ adoption_applications table                     │
│  ├─ adoptions table                                 │
│  ├─ users table                                     │
│  └─ cache, jobs tables                              │
└─────────────────────────────────────────────────────┘
```

## File Organization

```
ParrotNest/
│
├── Frontend (React + Inertia)
│   └── resources/js/
│       ├── Pages/
│       │   ├── Welcome.jsx          ─► Homepage
│       │   ├── Dashboard.jsx        ─► User dashboard
│       │   ├── Auth/                ─► Login/Register
│       │   ├── Parrots/             ─► Browse & view
│       │   ├── Species/             ─► Species catalog
│       │   └── Applications/        ─► Apply & track
│       └── Components/
│           ├── ParrotCard.jsx       ─► Reusable
│           ├── FilterSidebar.jsx    ─► Filters
│           └── ApplicationForm.jsx  ─► Multi-step
│
├── Backend (Laravel)
│   ├── app/
│   │   ├── Models/
│   │   │   ├── Species.php
│   │   │   ├── Parrot.php
│   │   │   ├── AdoptionApplication.php
│   │   │   └── Adoption.php
│   │   │
│   │   ├── Http/Controllers/
│   │   │   ├── ParrotController.php
│   │   │   ├── SpeciesController.php
│   │   │   └── AdoptionApplicationController.php
│   │   │
│   │   └── Filament/Resources/
│   │       ├── SpeciesResource.php
│   │       ├── ParrotResource.php
│   │       ├── AdoptionApplicationResource.php
│   │       └── AdoptionResource.php
│   │
│   └── routes/
│       └── web.php                  ─► All routes
│
└── Database
    ├── migrations/
    │   ├── create_species_table
    │   ├── create_parrots_table
    │   ├── create_adoption_applications_table
    │   └── create_adoptions_table
    │
    └── seeders/
        ├── SpeciesSeeder.php        ─► 8 species
        └── ParrotSeeder.php         ─► 7 parrots
```

## Route Organization

```
PUBLIC ROUTES (No Auth Required)
├── GET  /                           → Home with featured parrots
├── GET  /parrots                    → Browse all parrots
├── GET  /parrots/{id}               → Parrot details
├── GET  /species                    → Species catalog
├── GET  /species/{id}               → Species details
├── GET  /login                      → Login page
└── GET  /register                   → Register page

AUTHENTICATED ROUTES (Requires Login)
├── GET  /dashboard                  → User dashboard
├── GET  /apply/{parrot}             → Application form
├── POST /apply                      → Submit application
├── GET  /my-applications            → List applications
├── GET  /my-applications/{id}       → Application details
└── GET  /profile                    → Profile management

ADMIN ROUTES (Filament Panel)
├── GET  /admin                      → Admin dashboard
├── CRUD /admin/parrots              → Parrot management
├── CRUD /admin/species              → Species management
├── CRUD /admin/adoption-applications → Application review
├── CRUD /admin/adoptions            → Adoption tracking
└── CRUD /admin/users                → User management
```

## Data Flow Example: Viewing a Parrot

```
User clicks parrot card
        │
        ▼
GET /parrots/{id}
        │
        ▼
routes/web.php
        │
        ▼
ParrotController@show
        │
        ├─► Load Parrot from DB
        ├─► Load related Species
        ├─► Increment view count
        └─► Find similar parrots
        │
        ▼
Inertia::render('Parrots/Show')
        │
        ▼
React component receives:
├─ parrot (with species)
└─ similarParrots
        │
        ▼
Render parrot details page
├─ Image gallery
├─ Species information
├─ Adoption fee
├─ Apply button
└─ Similar parrots section
```

## Security Layers

```
┌─────────────────────────────────────┐
│  1. Authentication (Laravel Breeze) │
│     └─ Session-based auth            │
└─────────────────────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│  2. Authorization (Middleware)      │
│     ├─ auth (logged in users)        │
│     └─ verified (email verified)     │
└─────────────────────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│  3. CSRF Protection                 │
│     └─ Token validation on forms     │
└─────────────────────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│  4. SQL Injection Prevention        │
│     └─ Eloquent ORM + Prepared       │
│        Statements                    │
└─────────────────────────────────────┘
                 ▼
┌─────────────────────────────────────┐
│  5. XSS Protection                  │
│     └─ Blade/React auto-escaping     │
└─────────────────────────────────────┘
```

## Deployment Architecture (Future)

```
┌──────────────┐      ┌──────────────┐
│   Cloudflare │◄────►│     Nginx    │
│     (CDN)    │      │  Web Server  │
└──────────────┘      └──────┬───────┘
                             │
                             ▼
                      ┌──────────────┐
                      │   Laravel    │
                      │  Application │
                      └──────┬───────┘
                             │
               ┌─────────────┼─────────────┐
               ▼             ▼             ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │  MySQL   │  │  Redis   │  │  Storage │
        │ Database │  │  Cache   │  │  (S3)    │
        └──────────┘  └──────────┘  └──────────┘
```

---

This architecture provides:
✅ Clean separation of concerns
✅ Scalable structure
✅ Secure data flow
✅ Modern tech stack
✅ Easy to maintain and extend
