
<div align="center" style="border: 4px solid #3F00FF; padding: 20px; border-radius: 15px; background: linear-gradient(to bottom, #f0f0ff, #e6e6fa); box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);">
  <p align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Ribeye&size=50&pause=1000&color=FF4500&center=true&width=900&height=100&lines=𝐑𝐎𝐌𝐄𝐊%20-𝐗𝐃-V2;%20𝗠𝗨𝗟𝗧𝗜-𝗗𝗘𝗩𝗜𝗖𝗘%20𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣%20𝗕𝗢𝗧;%20𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗗%20𝗕𝗬%20𝐑𝐎𝐌𝐄𝐊%20𝐗𝐃..💖" alt="Title">
  </p>  <div align="center">
    <a href="https://github.com/ROMEKTRICKS/ROMEK-XD">
      <img src="https://i.ibb.co/9YDL3JF/ROMEK-XD-V2.jpg" alt="Romek XD Banner" width="700" style="border: 3px solid #FF4500; border-radius: 10px;">
    </a>
  </div>
</div>
---

<div align="center" style="margin-top: 20px;">
  <img src="https://img.shields.io/github/forks/ROMEKTRICKS/ROMEK-XD-v2?label=Forks&style=social" alt="Forks" style="margin: 0 5px;">
  <img src="https://img.shields.io/github/stars/ROMEKTRICKS/ROMEK-XD-V2?style=social" alt="Stars" style="margin: 0 5px;">
  <a href="https://whatsapp.com/channel/0029VakaPzeD38CV78dbGf0e" target="_blank">
    <img src="https://img.shields.io/badge/💬%20Join%20WhatsApp%20Channel-green?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp Channel" style="margin: 10px 0;">
  </a>
</div>
---

<div align="center" style="background: #f0f8ff; padding: 20px; border: 3px dashed #3F00FF; border-radius: 10px; margin: 20px 0; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
  <h2 style="color: #3F00FF;">🚀 Deployment Steps</h2>  <h3>1️⃣ Fork This Repository</h3>
  <a href="https://github.com/ROMEKTRICKS/ROMEK-XD-V2/fork" target="_blank">
    <img alt="Fork Repo" src="https://img.shields.io/badge/🍴%20FORK%20THIS%20REPO-black?style=for-the-badge&logo=github&logoColor=white" width="300">
  </a>  <hr style="border-top: 2px solid #3F00FF;">  <h3>2️⃣ Deploy Using Session ID (Pair Code Login)</h3>
  <a href="[https://romex-pair-code.onrender.com/)]" target="_blank">
    <img alt="Pair Code Login" src="https://img.shields.io/badge/🔑%20PAIR%20CODE%20LOGIN-%2300BFFF?style=for-the-badge&logo=link&logoColor=white" width="300">
  </a>  <hr style="border-top: 2px solid #3F00FF;">  <h3>3️⃣ Deployment Options</h3>  <h4>Deploy to PANEL</h4>
  <a href="https://panel.solarhosting.cc" target="_blank">
   <img alt="Solar Hosting Panel" src="https://img.shields.io/badge/%20PANEL%20Solar%20Hosting-orange?style=for-the-badge&logo=internet-explorer&logoColor=white" width="300">
</a>
<a href="https://raw.githubusercontent.com/ROMEKTRICKS/ROMEK-XD-V2-data/main/ROMEK-XD-V2.zip" download>
   <img src="https://img.shields.io/badge/📥%20Download%20from%20GitHub-blue?style=for-the-badge&logo=github&logoColor=white" alt="Download File">
</a>
  </a>  <h4>Deploy to Render</h4>
  <a href="https://dashboard.render.com/" target="_blank">
    <img src="https://telegra.ph/file/c15e952f017c10e12f431.jpg" alt="Deploy to Render" width="150" style="border-radius: 8px;">
  </a>  <h4>Deploy to Heroku</h4>
  <a href="https://dashboard.heroku.com/new?template=https://github.com/ROMEKTRICKS/ROMEK-XD-V2" target="_blank">
    <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku">
  </a>
</div>
---

<div align="center" style="margin-top: 20px;">
  <a href="https://github.com/ROMEKTRICKS/">
    <img src="https://i.ibb.co/FsmcYzg/ROMEK-XD-V2.jpg" alt="Romek XD Logo" width="100" style="border: 2px solid #FF4500; border-radius: 50%; padding: 5px;">
  </a>
</div>

<details>
  <summary><strong>Show more</strong></summary>


## GitHub Deployment

```yaml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limits run to 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
---
