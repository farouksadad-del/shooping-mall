# Shooping Mall

Boutique en ligne de vente de montres (Next.js 14, noir et jaune). Tel : 0522364759

Site en ligne : https://farouksadad-del.github.io/shooping-mall/

Chaque push sur `main` republie automatiquement le site sur GitHub Pages.

## Lancer en local (Windows PowerShell)

```bash
npm.cmd install
npm.cmd run dev
```

Puis ouvrir http://localhost:3000

## Commandes et contact

Le site est statique : les formulaires ouvrent la messagerie du client si la variable
de depot `CONTACT_EMAIL` est definie (Settings > Secrets and variables > Actions > Variables),
sinon ils invitent le client a appeler la boutique.
