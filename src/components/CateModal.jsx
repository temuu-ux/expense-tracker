import { BsPlusLg } from "react-icons/bs";
import { cate } from "@/pages/utils/lastDRecord";
import addCate from "@/pages/utils/lastDRecord";
import React, { useState } from "react";

export default function CateModal(props) {
  const { cateClose } = props;
  const [logo, setLogo] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 10.8329V19.5001C21 19.8979 20.842 20.2795 20.5607 20.5608C20.2794 20.8421 19.8978 21.0001 19.5 21.0001H15.75C15.3522 21.0001 14.9706 20.8421 14.6893 20.5608C14.408 20.2795 14.25 19.8979 14.25 19.5001V15.7501C14.25 15.5512 14.171 15.3604 14.0303 15.2198C13.8897 15.0791 13.6989 15.0001 13.5 15.0001H10.5C10.3011 15.0001 10.1103 15.0791 9.96967 15.2198C9.82902 15.3604 9.75 15.5512 9.75 15.7501V19.5001C9.75 19.8979 9.59196 20.2795 9.31066 20.5608C9.02936 20.8421 8.64782 21.0001 8.25 21.0001H4.5C4.10218 21.0001 3.72064 20.8421 3.43934 20.5608C3.15804 20.2795 3 19.8979 3 19.5001V10.8329C2.99997 10.6253 3.04303 10.42 3.12646 10.2299C3.20989 10.0398 3.33187 9.86907 3.48469 9.72855L10.9847 2.6523L10.995 2.64199C11.2711 2.39086 11.631 2.25171 12.0042 2.25171C12.3775 2.25171 12.7373 2.39086 13.0134 2.64199C13.0166 2.64566 13.0201 2.6491 13.0238 2.6523L20.5238 9.72855C20.675 9.86981 20.7954 10.0409 20.8774 10.2309C20.9594 10.421 21.0011 10.6259 21 10.8329Z"
        fill="#343330"
      />
    </svg>
  );

  const [cateVisible, setCateVisible] = useState(false);

  const handlerLogo = (logo) => {
    setLogo(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d={logo} fill="#343330" />
      </svg>
    );
  };

  return (
    <div className="w-full inset-0 bg-black/30 h-[1250px] flex items-center justify-center z-10 absolute backdrop-blur-sm bg-opacity-50 transition-opacity duration-225 ease-out ">
      <div className="pb-32">
        <div className=" max-w-[494px] w-full h-full bg-[#FFFFFF] rounded-xl border ">
          <div className="flex justify-between">
            <h3 className="font-semibold not-italic text-xl  p-4">
              Add Category
            </h3>
            <button
              className="btn btn-ghost text-[#0F172A] w-6 h-6 mt-1"
              onClick={() => cateClose()}
            >
              ✕
            </button>
          </div>

          <div className="flex justify-center  border-t  border-[#E2E8F0] pt-3 px-6 ">
            <div className="flex gap-4 w-[494px] py-3 ">
              <div className="dropdown ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn "
                  onClick={() => {
                    setCateVisible(!cateVisible);
                  }}
                >
                  {logo}
                </div>
                {cateVisible && (
                  <div className=" ">
                    <ul
                      tabIndex={0}
                      className="dropdown-content  menu rounded-box pl-0.5 "
                    >
                      <div className="flex flex-wrap w-[340px] bg-[#FFFFFF] shadow-2xl rounded-lg p-0 m-0  overflow-y-scroll ">
                        {addCate.map((e) => {
                          return (
                            <div
                              onClick={() => {
                                handlerLogo(e.logo.props.children.props.d);
                              }}
                            >
                              <li className="flex p-0 ">
                                <a className="p-4 ">{e.logo}</a>
                              </li>
                            </div>
                          );
                        })}
                        <div className="border-t w-full  flex mx-5"></div>
                        <div className="flex w-full  justify-around  px-2 py-5">
                          {cate.map((e) => {
                            return <div>{e.color}</div>;
                          })}
                        </div>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <select className="select select-bordere w-[350px] ">
                  <option disabled selected>
                    name
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-4 pb-7 flex justify-center">
            <button className="bg-[#16A34A]  h-10 rounded-3xl w-[442px] text-[#F9FAFB] font-normal not-italic text-base">
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
