import { createRealmContext } from "@realm/react";

import { Author } from "./novel";

//

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext({
    schema: [Author],
    deleteRealmIfMigrationNeeded: true,
  });
