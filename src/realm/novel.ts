import type { ObjectSchema } from "realm";

const Author: ObjectSchema = {
  name: "Author",
  properties: {
    id: "int",
    fullname: "string?",
    email: "string?",
    username: "string?",
    phone: "string?",
    photo_profile: "string?",
    personal_bio: "string?",
    is_admin: "bool?",
    is_guest: "int?",
    google_token: "string?",
    created_at: "string",
    updated_at: "string",
  },
  primaryKey: "id",
};

export { Author };
