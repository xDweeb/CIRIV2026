# Committee Organization Data Format

## Adding New Organizing Committee Members

### File Location
`src/data/committee_organisation.json`

### Format Example
```json
[
  {
    "name": "Pr. Full Name",
    "role": "Position Title",
    "image": "/images/organisation/member-photo.webp"
  }
]
```

### Instructions
1. Add member photo to `/public/images/organisation/` in .webp format
2. Use the format above to add new members
3. Make sure image paths match the actual file names
4. Each member should have: name, role, and image properties

### Example with Multiple Members
```json
[
  {
    "name": "Pr. Ahmed El Mansouri",
    "role": "Président du Comité d'Organisation", 
    "image": "/images/organisation/ahmed_elm.webp"
  },
  {
    "name": "Dr. Salma Benali",
    "role": "Responsable Logistique",
    "image": "/images/organisation/salma_benali.webp"
  }
]
```
