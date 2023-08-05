import './footer.css';

const Footer = () => (
  <div className="bg-dark flex-center flex-column p-3" id="footer">
    <div className="socials d-flex mt-1">
      <a href="https://github.com/c00p75">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
          <path fill="white" d="M9.358 2.145a8.209 8.209 0 0 0-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 0 0-.51-.053a1.258 1.258 0 0 0-.232.028l-.01.002l-.004.002h-.003l.137.481l-.137-.48a.5.5 0 0 0-.32.276a3.12 3.12 0 0 0-.159 2.101A3.354 3.354 0 0 0 2 5.93c0 1.553.458 2.597 1.239 3.268c.547.47 1.211.72 1.877.863a2.34 2.34 0 0 0-.116.958v.598c-.407.085-.689.058-.89-.008c-.251-.083-.444-.25-.629-.49a4.798 4.798 0 0 1-.27-.402l-.057-.093a9.216 9.216 0 0 0-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127l-.254.968l.484.127c.08.02.184.095.355.346a7.2 7.2 0 0 1 .19.302l.068.11c.094.152.202.32.327.484c.253.33.598.663 1.11.832c.35.116.748.144 1.202.074V14.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.563c0-.315-.014-.604-.103-.873c.663-.14 1.322-.39 1.866-.86c.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 0 0-.768-2.125a3.12 3.12 0 0 0-.159-2.1a.5.5 0 0 0-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001l-.004-.002l-.009-.002a.671.671 0 0 0-.075-.015a1.261 1.261 0 0 0-.158-.013a2.172 2.172 0 0 0-.51.053c-.391.084-.93.283-1.636.716Z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/georgemsapenda/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="white" d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
        </svg>
      </a>
      <a href="https://twitter.com/GeorgeMsapenda">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="white" stroke="#696969" d="M38.74 16.55v1c0 10.07-7.64 21.61-21.62 21.61A21.14 21.14 0 0 1 5.5 35.71a12.22 12.22 0 0 0 1.81.11a15.25 15.25 0 0 0 9.44-3.24a7.56 7.56 0 0 1-7.1-5.29a6.9 6.9 0 0 0 1.44.15a7.53 7.53 0 0 0 2-.27A7.57 7.57 0 0 1 7 19.72v-.1a7.42 7.42 0 0 0 3.44.94A7.54 7.54 0 0 1 8.05 10.5a21.58 21.58 0 0 0 15.68 7.94a6.38 6.38 0 0 1-.21-1.74a7.55 7.55 0 0 1 13.17-5.31a15.59 15.59 0 0 0 4.83-1.85a7.65 7.65 0 0 1-3.39 4.27a15.87 15.87 0 0 0 4.37-1.26a15.56 15.56 0 0 1-3.76 4Z" />
        </svg>
      </a>
    </div>
    <p className="text-center mt-3 m-0">
      Copyright 2023. All Rights Reserved
    </p>
  </div>
);

export default Footer;
