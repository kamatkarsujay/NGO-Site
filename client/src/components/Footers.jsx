import React from "react";
import { Footer } from "flowbite-react";

const Footers = () => {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="mx-auto px-4">
        <Footer container={true} className="">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand href="#" name="NGO-Site" />
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="#">Login</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">LinkedIn</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="NGO-Site™" year={2023} />
            </div>
          </div>
        </Footer>
      </div>
    </footer>
  );
};

export { Footers };
