## Roadmap
- [x] Website
    - [ ] Splash Page with Download Launcher Button
    - [ ] Register / Login Pages
- [x] MySQL Database
- [x] User Authentication
- [ ] Secure Transactions for Digital Goods

## Setup
1. Install and setup [MySQL](https://dev.mysql.com/downloads/installer/) (preferably setup on a remote dedicated machine)
3. Install dependencies with `yarn install`
4. Create `.env` file in Web-Server root directory and fill following variables inside
```
DB_HOST=xxx.xxx.xxx.xxx
DB_USER=xxxxx
DB_PASSWORD=xxxxxxx
```
5. Populate the `src/releases` folder with build(s) from the Unity standalone. (The folder must be called `latest` and must be compressed to a zip called `latest.zip` in the respective platform folder under releases in order for the Launcher to correctly retrieve the standalone)
6. Run server with `yarn dev:start`
