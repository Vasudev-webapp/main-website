-- Category Rename Verification
-- "Industrial Chemicals" is now displayed as "Speciality Chemicals" (DB value: 'industrial')
-- "Specialty Chemicals" is now displayed as "API & Intermediates" (DB value: 'specialty')
--
-- The DB enum values (industrial, specialty, surfactant) remain UNCHANGED.
-- Only the display labels in the application code have been updated.
-- No data migration is required.

-- Verify current category distribution:
SELECT category, COUNT(*) as product_count
FROM products
GROUP BY category
ORDER BY category;

-- If you ever need to swap actual DB values (NOT needed for this rename):
-- UPDATE products SET category = 'api_intermediates' WHERE category = 'specialty';
-- UPDATE products SET category = 'speciality' WHERE category = 'industrial';
