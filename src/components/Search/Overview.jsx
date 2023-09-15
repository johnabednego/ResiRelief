import React from "react";

const Overview = ({d_facilities, data}) => {
  return (
    <div className=" w-full h-fit  flex flex-col md:flex-row items-center justify-center text-left text-lg text-black">
      <div className=" w-full items-center justify-center flex flex-col h-fit z-[1]">
        {/* Name and location */}
        <div className=" w-full md:w-fit h-fit rounded bg-white box-border flex flex-col pt-[16px] pb-[16px] pr-[16px] pl-[16px] items-start justify-center text-xs text-white border-[1px] border-solid border-[#DDDFE2]">
          <div className="overflow-hidden flex flex-row pt-0 pb-[3px] pr-2 pl-0 items-center justify-center">
            {/* best seller */}
            <div className="rounded-10xs w-[79px] overflow-hidden shrink-0 flex flex-row items-center justify-center z-[1]">
              <div className="bg-[#E12D2D] flex flex-row py-[6px] pr-[9px] pl-2.5 items-center justify-center">
                <div className=" leading-[12px]">Best</div>
              </div>
            </div>
            {/* enture apartment */}
            <div className=" text-[#28871C] rounded flex flex-row pt-[4px] pb-[4px] pr-[4px] pl-[4px] items-start justify-start z-[0] border-[1px] border-solid border-[#32A923]">
              <div className="w-4 overflow-hidden shrink-0 flex flex-row items-start justify-center">
                <img
                  className=" w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/homeslogosvg.svg"
                />
              </div>
              <div className="flex flex-row pt-0 pb-[1px] pr-[3px] pl-1 items-start justify-start">
                <div className=" leading-[16px]">{data.property_type}</div>
              </div>
            </div>
          </div>
          <div className=" w-full md: h-fit text-xs sm:text-sm text-black">
            <div className=" w-full top-[0px] right-[0px] left-[0px]  text-[18px] sm:text-[25px]">
              <b className=" top-[-1.6px] left-[0px] leading-[37.14px]">
                {data.title}
              </b>
            </div>
            <div className=" flex  leading-[20px]">
              {data.town}, {data.regional_capital}, Ghana
              <div className=" mt-[2px] ml-1 flex flex-row py-0 pr-[2px] pl-0 items-start justify-start text-xs">
                <div className=" leading-[18.57px]">
                  <span className=" mr-1">-</span>
                  <span className=" cursor-pointer uppercase text-[#488BF8]">
                    View on map
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full top-[57.7px] right-[0px] left-[0px] overflow-hidden flex flex-col pt-2 px-0 pb-[1px] box-border items-start justify-start gap-[7.4px]">
              <div className="flex-1  box-border  min-w-[1px] z-[1] border-b-[0.8px] border-solid border-whitesmoke-200" />
              <div className=" flex flex-row pt-0 pb-[1px] pr-[23px] pl-0 box-border items-start justify-start z-[0]">
                <div className=" leading-[20px] font-light">
                  <p className="m-0">
                    Conveniently situated in {data.town}, part of {data.regional_capital}, this
                    property puts you close to attractions and
                  </p>
                  <p className="m-0">
                    interesting dining options. This 4-star property is packed
                    with in-house facilities to improve the quality and joy
                  </p>
                  <p className="m-0">of your stay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-fit  top-[230.1px] right-[0px] left-[0px] bg-white box-border flex flex-row pt-[15px] pb-[16px] pr-[16px] pl-[16px] items-start justify-start mt-4 border-[1px] border-solid border-[#DDDFE2]">
          {/* Highlight */}
          <div className=" flex flex-col items-start justify-start gap-[17.2px]">
            <div className=" leading-[24px] font-medium">Highlights</div>
            <div className="flex flex-row flex-wrap py-0 pr-[1px] pl-0 box-border items-center justify-center text-center text-xs">
              <div className="w-[148.47px] flex flex-col pt-0 pb-5 pr-[18px] pl-2.5 box-border items-center justify-start gap-[3.8px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/doorsvg.svg"
                  />
                </div>
                <div className="w-[120.47px] overflow-hidden flex flex-row pt-0 px-0 pb-[1px] box-border items-start justify-center">
                  <div className=" leading-[16px] font-medium">
                    Front desk [24-hour]
                  </div>
                </div>
              </div>
              <div className="w-[148.48px] flex flex-col pt-0 pb-5 pr-[24px] pl-[16px] box-border items-center justify-start gap-[4px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/transfersvg.svg"
                  />
                </div>
                <div className=" w-[108.2px] overflow-hidden shrink-0">
                  <div className=" top-[0.8px] left-[calc(50%_-_54.1px)] leading-[16px] font-medium flex items-center justify-center w-[93.79px]">
                    Airport transfer
                  </div>
                  <div className=" top-[2px] left-[calc(50%_+_41.1px)] w-3 overflow-hidden flex flex-row p-px box-border items-start justify-start">
                    <img className=" w-2.5 h-2.5" alt="" src="/vector1.svg" />
                  </div>
                </div>
              </div>
              <div className="w-[148.48px] flex flex-col pt-0 pb-1 pr-2 pl-0 box-border items-center justify-start gap-[4px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/bedkingsvg.svg"
                  />
                </div>
                <div className=" w-[140.48px]  overflow-hidden shrink-0">
                  <div className=" top-[0.8px] left-[calc(50%_-_68.68px)] leading-[16px] font-medium flex items-center justify-center w-[137.54px]">
                    Excellent room comfort
                  </div>
                  <div className=" cursor-pointer  top-[16.8px] left-[calc(50%_-_33.28px)] leading-[16px] font-medium flex items-center justify-center w-[52.12px]">{`& quality`}</div>
                  <div className=" top-[18px] left-[calc(50%_+_20.26px)] w-3 overflow-hidden flex flex-row p-px box-border items-start justify-start">
                    <img className=" w-2.5 h-2.5" alt="" src="/vector2.svg" />
                  </div>
                </div>
              </div>
              <div className="w-[148.47px] flex flex-col pt-0 pb-5 pr-[26px] pl-[18px] box-border items-center justify-start gap-[4px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/spraysvg.svg"
                  />
                </div>
                <div className=" w-[102.54px] overflow-hidden shrink-0">
                  <div className=" top-[0.8px] left-[calc(50%_-_51.27px)] leading-[16px] font-medium flex items-center justify-center w-[88.12px]">
                    Sparkling clean
                  </div>
                  <div className=" top-[2px] left-[calc(50%_+_38.27px)] w-3 overflow-hidden flex flex-row p-px box-border items-start justify-start">
                    <img className=" w-2.5 h-2.5" alt="" src="/vector3.svg" />
                  </div>
                </div>
              </div>
              <div className="w-[148.47px] flex flex-col pt-0 pb-1 pr-2 pl-0 box-border items-center justify-start gap-[3.8px]">
                <div className="w-8 overflow-hidden flex flex-row items-start justify-start">
                  <img
                    className=" w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/pooloutdoorfacilityfillicon.svg"
                  />
                </div>
                <div className="w-[140.47px] overflow-hidden flex flex-row pt-0 pb-[1px] pr-[26px] pl-[25px] box-border items-start justify-center">
                  <div className=" leading-[16px] font-medium">
                    <p className="m-0">Swimming pool</p>
                    <p className="m-0">[outdoor]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hygiene */}
        <div className="w-full md:w-fit p-4 top-[391.7px] rounded bg-white box-border h-fit border-[1px] mt-4 border-solid border-[#DDDFE2]">
          <div className=" top-[11.6px] left-[12.8px] leading-[24px] font-medium">
            Hygiene Plus
          </div>
          <div className="top-[28.8px] right-[0.8px] left-[0.8px] flex flex-col pt-4 px-4 pb-[16px] box-border items-start justify-start text-base">
            <div className="">
              <div className=" top-[-1.2px] left-[0px] leading-[22px]">
                This property has self-selected and self-certified the following
                hygiene measures.
              </div>
            </div>

            <div className=" flex-wrap flex flex-row pt-3 pb-1 pr-[4px] pl-1 box-border items-center justify-center text-sm">
              {/* safety */}
              <div className=" mr-2 mt-1 rounded bg-[#F8F7F9] flex flex-row p-2 box-border items-start justify-start text-xs">
                <div className="flex flex-row pt-0 px-2 pb-[46px] items-start justify-start">
                  <div className=" flex flex-row items-start justify-center">
                    <img
                      className=" w-9 h-9"
                      alt=""
                      src="/safetyfeaturessvg.svg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className=" w-full top-[1.8px] right-[0px] left-[0px] flex flex-row pt-0 pb-[1px] pr-[72px] pl-0 box-border items-start justify-start text-smi">
                    <div className=" leading-[18.19px] font-semibold">
                      Safety Features
                    </div>
                  </div>
                  <div className=" w-full top-[27.79px] right-[0px] left-[0px] flex flex-row pt-0 pb-[3px] pr-2 pl-0 box-border items-start justify-start gap-[8px] ">
                    <div className="flex flex-row pt-[1px] px-0 pb-[18px] items-start justify-center">
                      <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1px] pb-[1px] pr-[1px] pl-[1px] box-border items-start justify-start">
                        <img
                          className=" w-[11.59px] h-[9.32px]"
                          alt=""
                          src="/vector5.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row pt-0 pb-[1px] pr-[20px] pl-0 items-start justify-start">
                      <div className=" leading-[16px]">
                        <p className="m-0">Staff trained in safety</p>
                        <p className="m-0">protocol</p>
                      </div>
                    </div>
                  </div>
                  <div onClick={d_facilities} className=" cursor-pointer top-[63.79px] right-[0px] left-[76.51px] flex flex-row pt-[1px] pb-[1px] pl-0 box-border items-start justify-start text-[#5392F9]">
                    <div className=" leading-[16px]">See all amenities</div>
                  </div>
                </div>
              </div>

              {/* preventive */}
              <div className=" mr-2 mt-1 rounded bg-[#F8F7F9] flex flex-row p-2 box-border items-start justify-start">
                <div className="flex flex-row pt-0 px-2 pb-[46px] items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-start justify-center">
                    <img
                      className=" w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/preventiveequipmentsvg.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col pt-[1px] px-0 pb-[9px] items-start justify-start gap-[6.8px]">
                  <div className=" flex flex-row pt-0 pb-[1px] pr-[9px] pl-0 box-border items-start justify-start">
                    <div className=" leading-[18.19px] font-semibold">
                      Preventative Equipment
                    </div>
                  </div>
                  <div className=" flex flex-col items-start justify-start text-xs">
                    <div className=" flex flex-row pt-0 pb-[3px] pr-[67px] pl-0 box-border items-start justify-start gap-[8px]">
                      <div className="flex flex-row pt-[1px] px-0 pb-[4px] items-start justify-center">
                        <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1px] pb-[1px] pr-[1px] pl-[1px] box-border items-start justify-start">
                          <img
                            className=" w-[11.59px] h-[9.32px]"
                            alt=""
                            src="/vector6.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-0 pb-[2px] pr-[1px] pl-0 items-start justify-start">
                        <div className=" leading-[16px]">Hand sanitizer</div>
                      </div>
                    </div>
                    <div className=" flex flex-row pt-0 pb-[3px] pr-[60px] pl-0 box-border items-start justify-start gap-[8px] mt-[-0.2px]">
                      <div className="flex flex-row pt-[1px] px-0 pb-[4px] items-start justify-center">
                        <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1px] pb-[1px] pr-[1px] pl-[1px] box-border items-start justify-start">
                          <img
                            className=" w-[11.59px] h-[9.32px]"
                            alt=""
                            src="/vector7.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-0 pb-[2px] pr-[4px] pl-0 items-start justify-start">
                        <div className=" leading-[16px]">Free face masks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* health */}
              <div className=" mt-1 rounded bg-[#F8F7F9] flex flex-row p-2 box-border items-start justify-start min-w-[148.47999572753906px]">
                <div className="flex flex-row pt-0 px-2 pb-[46.349998474121094px] items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-start justify-center">
                    <img
                      className=" w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/healthandmedicalsvg.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col pt-[1.7999999523162842px] px-0 pb-[9.239997863769531px] items-start justify-start gap-[6.8px]">
                  <div className=" flex flex-row pt-0 pb-[0.1900005340576172px] pr-[40.46000671386719px] pl-0 box-border items-start justify-start">
                    <div className=" leading-[18.19px] font-semibold">
                      Health and Medical
                    </div>
                  </div>
                  <div className=" flex flex-col items-start justify-start text-xs">
                    <div className=" flex flex-row pt-0 pb-[3.9999992847442627px] pr-[87.55000305175781px] pl-0 box-border items-start justify-start gap-[8px]">
                      <div className="flex flex-row pt-[1.590000033378601px] px-0 pb-[4.969999313354492px] items-start justify-center">
                        <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1.310213565826416px] pb-[1.3727126121520996px] pr-[0.20721325278282166px] pl-[0.20721355080604553px] box-border items-start justify-start">
                          <img
                            className=" w-[11.59px] h-[9.32px]"
                            alt=""
                            src="/vector8.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-0 pb-[2.7599995136260986px] pr-[0.9099998474121094px] pl-0 items-start justify-start">
                        <div className=" leading-[16px]">First aid kit</div>
                      </div>
                    </div>
                    <div className=" flex flex-row pt-0 pb-[3.9999992847442627px] pr-[34.46000671386719px] pl-0 box-border items-start justify-start gap-[8px] mt-[-0.2px]">
                      <div className="flex flex-row pt-[1.600000023841858px] px-0 pb-[4.9599995613098145px] items-start justify-center">
                        <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1.310213565826416px] pb-[1.3727126121520996px] pr-[0.20721325278282166px] pl-[0.20721355080604553px] box-border items-start justify-start">
                          <img
                            className=" w-[11.59px] h-[9.32px]"
                            alt=""
                            src="/vector9.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-0 pb-[2.7599995136260986px] pr-0.5 pl-0 items-start justify-start">
                        <div className=" leading-[16px]">
                          Doctor/nurse on call
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default Overview;
