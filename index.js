const { sendEmail } = require("./server/mailer");

async function execute() {
  const emails = [
    {
      subject:
        "Review and Verify Account Access on SiteGround Hosting Platform:",
      body: "<div>#optimization #hosting-provider<ul><li>Log in to the SiteGround hosting platform.</li><li>Verify access permissions and user roles.</li><li>Ensure all team members have appropriate access levels.</li></ul></div>",
    },
    {
      subject:
        "Validate Access to FTP Account and Create a New Account if Necessary:",
      body: "<div>#optimization #hosting-provider<ul><li>Access the FTP account associated with the website.</li><li>Verify login credentials.</li><li>Create a new FTP account if access is not available or credentials are outdated.</li></ul></div>",
    },
    {
      subject:
        "Review and Assess the Contents of the Zip File Found in the File Manager:",
      body: "<div>#optimization #hosting-provider<ul><li>Navigate to the File Manager on the hosting platform.</li><li>Locate and inspect the contents of the zip file.</li><li>Ensure the integrity of the files and assess if any actions are required.</li></ul></div>",
    },
    {
      subject: "Update MySQL Database Password for Enhanced Security:",
      body: "<div>#optimization #hosting-provider<ul><li>Access the hosting platform's database management tools.</li><li>Change the password for the MySQL database associated with the website.</li><li>Ensure the new password meets security standards.</li></ul></div>",
    },
    {
      subject:
        "Determine and Implement a Suitable Plugin for Added Site Security:",
      body: "<div>#optimization #hosting-provider<ul><li>Research security plugins like Wordfence, Sucuri, or SiteGround.</li><li>Evaluate their features and compatibility with the website.</li><li>Install and configure the chosen security plugin to enhance website protection.</li></ul></div>",
    },
    {
      subject:
        "Adjust Caching Settings as Needed to Optimize Website Performance:",
      body: "<div>#optimization #hosting-provider<ul><li>Access the caching settings within the hosting platform or CMS.</li><li>Analyze current caching configurations.</li><li>Optimize caching settings to improve website speed and performance.</li></ul></div>",
    },
    {
      subject:
        "Set Up Redirects for Parked Domains to Main Domain or Remove Unnecessary Domains:",
      body: "<div>#optimization #hosting-provider<ul><li>Identify parked domains associated with the hosting account.</li><li>Configure redirects from parked domains to the main website domain.</li><li>Remove any unnecessary parked domains to streamline resources.</li></ul></div>",
    },
    {
      subject:
        "Review DNS Zone Editor Settings and Remove References to Unused Domains:",
      body: "<div>#optimization #hosting-provider<ul><li>Access the DNS Zone Editor within the hosting platform.</li><li>Review all DNS records and configurations.</li><li>Remove references to unused domains or outdated DNS records to declutter the settings.</li></ul></div>",
    },
  ];

  const subject = emails[0].subject;
  const msg = emails[0].body;

  try {
    await sendEmail({ subject, msg });
  } catch (e) {
    console.log({ e });
  }
}

execute();
