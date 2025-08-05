export class CreateProductDto {

    // Required attributes
    title: string;

    // Optional attributes
    short_description?: string;
    description?: string;
    country_id?: string;
    city_id?: string;
    price?: number;
    available?: boolean;
    listing_type?: string;
    state?: string;
    brand_id?: string;
    model_id?: string;
    sku_number?: string;
    attributes?: array;
}

// Full information about the listings can be found on: https://api-documentation.olx.ba/listings, under the "Create new listing" section.