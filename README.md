# Yoga Permana Portfolio

Deploy this repository on Vercel using the Other framework preset. Build and output settings are provided in vercel.json; no environment variables or dependencies are required.

The public address is served through Vercel through a read-only Vercel server function. Content, media, and animations come from the existing public portfolio. The origin must remain active and public. Changes published from the owner dashboard automatically appear through this address.

## Owner dashboard

Open /admin on the deployed Vercel address. You will be redirected to the existing secure dashboard and sign in with the owner's account. Dashboard authentication, database, and storage remain on Sites; this is not a full backend migration.

## Archived application source

Yoga-Permana-GitHub-Source.zip contains the original application source and local setup guide. It is retained as an archive, not executed by this deployment. The deployment build emits a Node.js function via the Vercel Build Output API. The function forwards only public GET/HEAD requests without user cookies or authentication headers.

## Verify after deployment

Check the homepage, mobile layout, scrolling animation, project links, uploaded media, and /admin redirect. Keep private evidence marked PRIVATE in the dashboard.

