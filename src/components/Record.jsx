import { BsPlusLg } from "react-icons/bs";
import { HiMiniEye } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { Type, Category } from "@/pages/utils/typeCateData";
import { Input } from "./Input";
import { Option, Option2, Option3 } from "./Option";
import { Slider } from "./Slider";
export default function Record() {
  return (
    <div className=" w-[282px]  bg-[#FFFFFF] px-2 py-6 flex flex-col gap-8 items-start  rounded-xl">
      <div>
        <div className="w-[250px] h-[88px] flex flex-col gap-6">
          <h1 className=" text-[#000000] text-2xl font-semibold not-italic">
            Records
          </h1>

          <button
            className="btn  h-8 bg-[#0166FF] rounded-3xl text-[#FFFFFF] "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <BsPlusLg /> Add
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost text-[#0F172A] w-6 h-6 absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-semibold not-italic text-xl">Add Record</h3>
              <div className="border-t border-[#E2E8F0] flex">
                <div className="py-5 px-6">
                  <div className="flex gap-2 ">
                    <button className="btn">Normal</button>
                    <button className="btn">Normal</button>
                  </div>
                  <div>
                    <Input />

                    <div>
                      <p>Category</p>
                      <Option />
                    </div>
                    <div className="flex">
                      <div>
                        <p>Date</p>
                        <Option2 />
                      </div>
                      <div>
                        <p>Date</p>
                        <Option3 />
                      </div>
                    </div>
                    <button className="btn btn-block">block</button>
                  </div>
                </div>
                <div className="py-5 px-6">
                  <div>
                    <p>Payee</p>
                    <Option />
                  </div>
                  <div>
                    <p>Note</p>
                    <textarea
                      placeholder="Bio"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="bg-gray-100 w-[250px] h-8 p-4 rounded-lg border border-gray-300 justify-start items-center inline-flex">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 w-[300px] h-8 text-neutral-700 text-base font-normal "
        />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-[#1F2937] text-base not-italic font-semibold">
          Types
        </h1>
        {Type.map((e) => (
          <div>
            <div className="text-center ">
              <label className=" cursor-pointer flex gap-2 ">
                <input type="checkbox" className="border-none" />
                <p className="text-[#1F2937] text-base not-italic font-normal">
                  {e.typeName}
                </p>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[250px] gap-1 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-[#1F2937] text-base not-italic font-semibold">
            Category
          </h1>
          <button className="text-gray-200 rounded-3xl">Clear</button>
        </div>
        {Category.map((e) => {
          return (
            <div>
              <div className="flex items-center justify-between">
                <div className="flex text-center items-center gap-2">
                  <HiMiniEye className="text-[#94A3B8] w-5 h-5" />
                  <p className="text-[#1F2937] text-base not-italic font-normal">
                    {e.cateName}
                  </p>
                </div>
                <IoMdArrowDropright className="w-5 h-5 " />
              </div>
            </div>
          );
        })}

        <div>
          <button className="flex items-center gap-2 text-[#1F2937] text-base not-italic font-normal">
            <BsPlusLg className="text-[#0166FF] w-5 h-5" /> Add Category
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1F2937] text-base not-italic font-semibold">
          Amount Range
        </h1>
        <div className="flex gap-4">
          <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
            <input
              type="text"
              className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            />
          </div>
          <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
            <input
              type="text"
              className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            />
          </div>
        </div>
        <Slider className="w-[245px]" />
      </div>
    </div>
  );
}
