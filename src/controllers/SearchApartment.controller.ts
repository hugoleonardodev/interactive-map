export default class SearchApartment {
  private readonly apartments: Apartment[]

  constructor(apartments: Apartment[]) {
    this.apartments = apartments
  }

  searchApartments(cityName: string, numberOfRooms: number): Apartment[] {
    const results: Apartment[] = []

    // Iterate through apartments to find matches
    for (const apartment of this.apartments) {
      if (apartment.City.toLowerCase() === cityName.toLowerCase() && apartment.Rooms === numberOfRooms) {
        results.push(apartment)
      }
    }

    return results
  }
}
