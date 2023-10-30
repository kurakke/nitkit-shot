export const beautifulLog = () => {
  const titleStyle = ['font-size: 30px'].join(';');
  const textStyle = ['font-size: 12px'].join(';');
  const nostyle = [].join(';');

  const firstDevider = '%c=======================================\n';
  const secondDevider = '%c=======================================\n\n';
  const title = '%cNit-Kit-Shot\n';
  const welcomeMessage =
    '%cWelcome to our gaming site, handcrafted by the 4I team from Kitakyushu Technical College.\n\n';
  const collaborationMessage =
    '%cThis platform was collaboratively developed by kurakke, shiromashi, and sakatan.\n\n';
  const kurakkeMessage = `%c'kurakke' took charge of both the frontend and backend, as well as the reservation system.`;
  const shiromashiMessage = `%c'shiromashi' dedicated himself to frontend development.`;
  const sakatanMessage = `%c'sakatan' contributed with his design flair and frontend skills.\n\n`;
  const contactMessage = `%cIf you wish to get in touch:\n- kurakke: Twitter @kurakke | Email: k20061kk@apps.kct.ac.jp`;

  console.log(
    `${firstDevider}${title}${secondDevider}${welcomeMessage}${collaborationMessage}${kurakkeMessage}${shiromashiMessage}${sakatanMessage}${contactMessage}`,
    nostyle,
    titleStyle,
    nostyle,
    textStyle,
    textStyle,
    textStyle,
    textStyle,
    textStyle,
    textStyle,
  );
};
