export const Footer = () => {
  return (
    <div className="w-full h-auto bg-footerBgColor text-white flex flex-col items-center py-10 mt-4">
      <p className="text-[0.875rem]">&copy; 2023 All Rights Reserved </p>
      <p className="text-[0.688rem] my-3">
        Privacy
        <span className="border-r-[1px] border-red-800 mx-2"></span> Terms of
        Service
      </p>
      <div className="w-full px-[3rem] lg:px-[6rem] text-center text-[0.688rem]">
        <p className="text-center text-[0.688rem]">
          This site is not a part of Facebook or Facebook website or YouTube
          website or YouTube Inc. Additionally, this site is NOT endorsed by
          YouTube or Facebook in any way.
          <br /> YOUTUBE is a trademark of YOUTUBE, Inc. Facebook is a trademark
          of Facebook
        </p>

        <p className="my-3">
          Disclaimer: All information provided is for educational use only.
          <br />
          Proper due diligence is always recommended before investing into
          programs.
        </p>

        <p>Thank you and enjoy!</p>
      </div>
    </div>
  );
};
