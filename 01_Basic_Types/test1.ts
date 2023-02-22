// Obgect Typisation

const info: OfficeInfo = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: "+380(44)123-45-67",
        email: "my@email.ua",
        address: {
            city: "Kyiv",
            street: "Shevchenka",
            house: 1,
            flat: 1
        }
    }
}

interface OfficeInfo {
    officeId: number;
    isOpened: boolean;
    contacts: OfficeContacts;
}

interface OfficeContacts {
    phone: string;
    email: string;
    address: OfficeAddress
}

interface OfficeAddress {
    city: string;
    street: string;
    house: number;
    flat: number;
}