import * as migration_20260717_074733_add_product_chemical_fields from './20260717_074733_add_product_chemical_fields';
import * as migration_20260803_061629_add_blog_authoring_fields from './20260803_061629_add_blog_authoring_fields';

export const migrations = [
  {
    up: migration_20260717_074733_add_product_chemical_fields.up,
    down: migration_20260717_074733_add_product_chemical_fields.down,
    name: '20260717_074733_add_product_chemical_fields'
  },
  {
    up: migration_20260803_061629_add_blog_authoring_fields.up,
    down: migration_20260803_061629_add_blog_authoring_fields.down,
    name: '20260803_061629_add_blog_authoring_fields'
  },
];
