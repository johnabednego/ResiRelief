import React from "react";

const Overview = () => {
  const nearby = [
    { name: "Macumba", distance: "1.1km" },
    { name: "Koala Supermarket", distance: "1.2km" },
    { name: "Sharpnet", distance: "1.2km" },
    { name: "M&J Travel & Tours", distance: "1.3km" },
    { name: "Christie Brown Ghana", distance: "1.3km" },
    { name: "Expertravel & Tours", distance: "1.4km" },
    { name: "Woodin Boutique", distance: "1.5km" },
    { name: "Books for Less", distance: "1.5km" },
    { name: "37 Military Hospital", distance: "1.6km" },
    { name: " Trust Hospital", distance: "1.6km" },
  ];
  return (
    <div className=" w-full h-fit  flex flex-col md:flex-row items-center justify-center text-left text-lg text-black">
      <div className=" h-fit z-[1]">
        {/* Name and location */}
        <div className=" h-fit w-full rounded bg-white box-border flex flex-col pt-[16px] pb-[16px] pr-[16px] pl-[16px] items-start justify-center text-xs text-white border-[1px] border-solid border-[#DDDFE2]">
          <div className="overflow-hidden flex flex-row pt-0 pb-[3px] pr-2 pl-0 items-center justify-center">
            {/* best seller */}
            <div className="rounded-10xs w-[79px] overflow-hidden shrink-0 flex flex-row items-center justify-center z-[1]">
              <div className="bg-[#E12D2D] flex flex-row py-[6px] pr-[9px] pl-2.5 items-center justify-center">
                <div className=" leading-[12px]">Best seller</div>
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
                <div className=" leading-[16px]">Entire apartment</div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[742.4px] h-fit text-sm text-black">
            <div className=" w-full top-[0px] right-[0px] left-[0px] h-[37.7px] text-[25px]">
              <b className=" top-[-1.6px] left-[0px] leading-[37.14px]">
                Accra Luxury Apartments @ The Gardens
              </b>
            </div>
            <div className=" flex top-[37.3px] left-[0px] leading-[20px]">
              Cantonments, Accra, Ghana
              <div className=" mt-[2px] ml-1 flex flex-row py-0 pr-[2px] pl-0 items-start justify-start text-xs">
                <div className=" leading-[18.57px]">
                  <span className=" mr-1">-</span>
                  <span className=" cursor-pointer uppercase text-[#488BF8]">
                    See map
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full top-[57.7px] right-[0px] left-[0px] overflow-hidden flex flex-col pt-2 px-0 pb-[1px] box-border items-start justify-start gap-[7.4px]">
              <div className="flex-1  box-border w-[742.4px] min-w-[1px] z-[1] border-b-[0.8px] border-solid border-whitesmoke-200" />
              <div className="w-[742.4px] flex flex-row pt-0 pb-[1px] pr-[23px] pl-0 box-border items-start justify-start z-[0]">
                <div className=" leading-[20px] font-light">
                  <p className="m-0">
                    Conveniently situated in the Cantonments part of Accra, this
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

        <div className=" w-full top-[230.1px] right-[0px] left-[0px] rounded bg-white box-border flex flex-row pt-[15px] pb-[16px] pr-[16px] pl-[16px] items-start justify-start border-[1px] border-solid border-[#DDDFE2]">
          {/* Highlight */}
          <div className="w-[742.4px] flex flex-col items-start justify-start gap-[17.2px]">
            <div className=" leading-[24px] font-medium">Highlights</div>
            <div className="w-[742.4px] flex flex-row py-0 pr-[1px] pl-0 box-border items-start justify-start text-center text-xs">
              <div className="w-[148.47px] flex flex-col pt-0 pb-5 pr-[18px] pl-2.5 box-border items-center justify-start gap-[3.8px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/doorsvg.svg"
                  />
                </div>
                <div className="w-[120.47px] overflow-hidden flex flex-row pt-0 px-0 pb-[0.19999998807907104px] box-border items-start justify-center">
                  <div className=" leading-[16px] font-medium">
                    Front desk [24-hour]
                  </div>
                </div>
              </div>
              <div className="w-[148.48px] flex flex-col pt-0 pb-5 pr-[24.139999389648438px] pl-[16.139999389648438px] box-border items-center justify-start gap-[4px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/transfersvg.svg"
                  />
                </div>
                <div className=" w-[108.2px] h-4 overflow-hidden shrink-0">
                  <div className=" top-[0.8px] left-[calc(50%_-_54.1px)] leading-[16px] font-medium flex items-center justify-center w-[93.79px] h-[14.4px]">
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
                <div className=" w-[140.48px] h-8 overflow-hidden shrink-0">
                  <div className=" top-[0.8px] left-[calc(50%_-_68.68px)] leading-[16px] font-medium flex items-center justify-center w-[137.54px] h-[14.4px]">
                    Excellent room comfort
                  </div>
                  <div className=" cursor-pointer  top-[16.8px] left-[calc(50%_-_33.28px)] leading-[16px] font-medium flex items-center justify-center w-[52.12px] h-[14.4px]">{`& quality`}</div>
                  <div className=" top-[18px] left-[calc(50%_+_20.26px)] w-3 overflow-hidden flex flex-row p-px box-border items-start justify-start">
                    <img className=" w-2.5 h-2.5" alt="" src="/vector2.svg" />
                  </div>
                </div>
              </div>
              <div className="w-[148.47px] flex flex-col pt-0 pb-5 pr-[26.970001220703125px] pl-[18.959999084472656px] box-border items-center justify-start gap-[4px]">
                <div className="overflow-hidden flex flex-row items-start justify-center">
                  <img
                    className=" w-[33px] h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/spraysvg.svg"
                  />
                </div>
                <div className=" w-[102.54px] h-4 overflow-hidden shrink-0">
                  <div className=" top-[0.8px] left-[calc(50%_-_51.27px)] leading-[16px] font-medium flex items-center justify-center w-[88.12px] h-[14.4px]">
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
                <div className="w-[140.47px] overflow-hidden flex flex-row pt-0 pb-[0.19999998807907104px] pr-[26.920001983642578px] pl-[25.549999237060547px] box-border items-start justify-center">
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
        <div className=" p-4 w-full top-[391.7px] right-[0px] left-[0px] rounded bg-white box-border h-fit border-[1px] border-solid border-[#DDDFE2]">
          <div className=" top-[11.6px] left-[12.8px] leading-[24px] font-medium">
            Hygiene Plus
          </div>
          <div className="top-[28.8px] right-[0.8px] left-[0.8px] overflow-hidden flex flex-col pt-4 px-4 pb-[16px] box-border items-start justify-start text-base">
            <div className=" w-[716.31px] h-[22px]">
              <div className=" top-[-1.2px] left-[0px] leading-[22px]">
                This property has self-selected and self-certified the following
                hygiene measures.
              </div>
            </div>

            <div className="w-[742.4px] flex flex-row pt-3 pb-1 pr-[4px] pl-1 box-border items-start justify-start text-sm">
              {/* safety */}
              <div className="flex-1 rounded bg-[#F8F7F9] flex flex-row p-2 box-border items-start justify-start min-w-[148px] text-xs">
                <div className="flex flex-row pt-0 px-2 pb-[46px] items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-start justify-center">
                    <img
                      className=" w-9 h-9 overflow-hidden shrink-0"
                      alt=""
                      src="/safetyfeaturessvg.svg"
                    />
                  </div>
                </div>
                <div className="flex-1  h-[82.35px] overflow-hidden">
                  <div className=" w-full top-[1.8px] right-[0px] left-[0px] flex flex-row pt-0 pb-[0.1900005340576172px] pr-[72.46000671386719px] pl-0 box-border items-start justify-start text-smi">
                    <div className=" leading-[18.19px] font-semibold">
                      Safety Features
                    </div>
                  </div>
                  <div className=" w-full top-[27.79px] right-[0px] left-[0px] flex flex-row pt-0 pb-[3.9999992847442627px] pr-2 pl-0 box-border items-start justify-start gap-[8px] text-dimgray-100">
                    <div className="flex flex-row pt-[1.590000033378601px] px-0 pb-[18.40999984741211px] items-start justify-center">
                      <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1.310213565826416px] pb-[1.3727126121520996px] pr-[0.20721325278282166px] pl-[0.20721355080604553px] box-border items-start justify-start">
                        <img
                          className=" w-[11.59px] h-[9.32px]"
                          alt=""
                          src="/vector5.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[20.460006713867188px] pl-0 items-start justify-start">
                      <div className=" leading-[16px]">
                        <p className="m-0">Staff trained in safety</p>
                        <p className="m-0">protocol</p>
                      </div>
                    </div>
                  </div>
                  <div className=" cursor-pointer top-[63.79px] right-[0px] left-[76.51px] flex flex-row pt-[1.4000000953674316px] pb-[1.1599993705749512px] pl-0 box-border items-start justify-start text-[#5392F9]">
                    <div className=" leading-[16px]">See all amenities</div>
                  </div>
                </div>
              </div>
              {/* preventive */}
              <div className="flex-1 rounded bg-[#F8F7F9] flex flex-row p-2 box-border items-start justify-start min-w-[148px]">
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
                  <div className="w-[171.46px] flex flex-row pt-0 pb-[1px] pr-[9px] pl-0 box-border items-start justify-start">
                    <div className=" leading-[18.19px] font-semibold">
                      Preventative Equipment
                    </div>
                  </div>
                  <div className="w-[171.46px] flex flex-col items-start justify-start text-xs text-dimgray-100">
                    <div className="w-[171.46px] flex flex-row pt-0 pb-[3px] pr-[67px] pl-0 box-border items-start justify-start gap-[8px]">
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
                    <div className="w-[171.46px] flex flex-row pt-0 pb-[3px] pr-[60px] pl-0 box-border items-start justify-start gap-[8px] mt-[-0.2px]">
                      <div className="flex flex-row pt-[1.600000023841858px] px-0 pb-[4.9599995613098145px] items-start justify-center">
                        <div className="w-3 overflow-hidden shrink-0 flex flex-row pt-[1.310213565826416px] pb-[1.3727126121520996px] pr-[0.20721325278282166px] pl-[0.20721355080604553px] box-border items-start justify-start">
                          <img
                            className=" w-[11.59px] h-[9.32px]"
                            alt=""
                            src="/vector7.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-0 pb-[2.7599995136260986px] pr-[4.839996337890625px] pl-0 items-start justify-start">
                        <div className=" leading-[16px]">Free face masks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* health */}
              <div className="flex-1 rounded bg-[#F8F7F9] flex flex-row p-2 box-border items-start justify-start min-w-[148.47999572753906px]">
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
                  <div className="w-[171.46px] flex flex-row pt-0 pb-[0.1900005340576172px] pr-[40.46000671386719px] pl-0 box-border items-start justify-start">
                    <div className=" leading-[18.19px] font-semibold">
                      Health and Medical
                    </div>
                  </div>
                  <div className="w-[171.46px] flex flex-col items-start justify-start text-xs text-dimgray-100">
                    <div className="w-[171.46px] flex flex-row pt-0 pb-[3.9999992847442627px] pr-[87.55000305175781px] pl-0 box-border items-start justify-start gap-[8px]">
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
                    <div className="w-[171.46px] flex flex-row pt-0 pb-[3.9999992847442627px] pr-[34.46000671386719px] pl-0 box-border items-start justify-start gap-[8px] mt-[-0.2px]">
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

        
        {/* facilities */}
        <div className=" w-full top-[607.65px] right-[0px] left-[0px] rounded bg-white box-border flex flex-row pt-[15.59999942779541px] pb-[16.800010681152344px] pr-[16.799976348876953px] pl-[16.799999237060547px] items-start justify-start border-[1px] border-solid border-[#DDDFE2]">
          <div className="w-[742.4px] flex flex-col items-start justify-start gap-[17.2px]">
            <div className=" leading-[24px] font-medium">Facilities</div>
            <div className=" w-[742.4px] h-[60px] text-xs">
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_30px)] right-[556.8px] left-[0px] flex flex-row pt-0 pb-1 pr-[64.010009765625px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector10.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[4.589996337890625px] pl-0 items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Airport transfer
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_30px)] right-[371.2px] left-[185.6px] flex flex-row pt-0 pb-1 pr-[79.6100082397461px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[1.9899978637695312px] pl-0 items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Valet parking
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_30px)] right-[185.6px] left-[371.2px] flex flex-row pt-0 pb-1 pr-[70.60000610351562px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector12.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 px-0 pb-[0.19999998807907104px] items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Shuttle service
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_30px)] right-[0px] left-[556.8px] flex flex-row pt-0 pb-1 pr-[25.279998779296875px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector13.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[1.32000732421875px] pl-0 items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Free Wi-Fi in all rooms!
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_0px)] right-[556.8px] left-[0px] flex flex-row pt-0 pb-1 pr-[75.35000610351562px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector10.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[0.25px] pl-0 items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Fitness center
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_6.2px)] right-[371.2px] left-[185.6px] flex flex-row pt-0 pb-[3.9999992847442627px] pr-2 pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector14.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[61.600006103515625px] pl-0 items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    <p className="m-0">Swimming pool</p>
                    <p className="m-0">[outdoor]</p>
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_0px)] right-[185.6px] left-[371.2px] flex flex-row pt-0 pb-1 pr-[36.600006103515625px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector12.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 px-0 pb-[0.19999998807907104px] items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Front desk [24-hour]
                  </div>
                </div>
              </div>
              <div className=" w-[calc(100%_-_556.8px)] top-[calc(50%_-_0px)] right-[0px] left-[556.8px] flex flex-row pt-0 pb-1 pr-[23.910003662109375px] pl-0 box-border items-center justify-start gap-[8px]">
                <div className="w-5 overflow-hidden shrink-0 flex flex-row pt-[3.6264445781707764px] pb-[3.680670976638794px] pr-[1.0789438486099243px] pl-[1.1030057668685913px] box-border items-start justify-start">
                  <img
                    className=" w-[17.82px] h-[12.69px]"
                    alt=""
                    src="/vector13.svg"
                  />
                </div>
                <div className="flex flex-row pt-0 pb-[0.19999998807907104px] pr-[0.69000244140625px] pl-0 items-start justify-start">
                  <div className=" leading-[16px] font-medium">
                    Check-in/out [express]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[324px] flex flex-col py-0 pr-0 pl-4 box-border items-start justify-start gap-[8px] z-[0] text-3xl text-gray-200">
        {/* reviews and compliments */}
        <div className="rounded bg-white box-border w-[308px] flex flex-row pt-[16.799999237060547px] pb-[24.799999237060547px] pr-[16.800006866455078px] pl-[16.799999237060547px] items-start justify-start border-[1px] border-solid border-[#DDDFE2]">
          <div className="w-[274.4px] flex flex-col py-0 pr-[129.75px] pl-0 box-border items-start justify-start gap-[22.81px]">
            <div className="w-[144.65px] flex flex-col items-center justify-start gap-[2.8px]">
              <div className=" text-[#24262C] flex flex-row items-start justify-start gap-[3.11px]">
                <div className="flex flex-row items-start justify-start text-[24px]">
                  <div className=" leading-[29px] font-semibold">8.9</div>
                </div>
                <div className="flex flex-row items-start justify-start text-[24px]">
                  <div className=" leading-[29px] font-semibold">Excellent</div>
                </div>
              </div>
              <div className="overflow-hidden flex flex-row pt-px pb-[3.190000534057617px] pl-0 box-border items-start justify-start text-sm text-[#0283DF]">
                <div className=" leading-[14px]">1,202 reviews</div>
              </div>
            </div>
            <div className=" rounded box-border w-[130.92px] h-[29.6px] text-xs text-black border-[1px] border-solid border-[#DDDFE2]">
              <div className=" top-[7px] left-[12.8px] leading-[16px]">
                Housekeeping
              </div>
              <div className=" top-[7px] left-[99.2px] leading-[16px] text-[#32A923]">
                2
              </div>
              <div className=" top-[7.2px] left-[calc(50%_+_44.67px)] w-3 overflow-hidden flex flex-row pt-[0.6834933757781982px] pb-[0.47950005531311035px] pr-[0.5309543609619141px] pl-[0.5px] box-border items-start justify-start">
                <img
                  className=" w-[10.97px] h-[10.84px]"
                  alt=""
                  src="/vector15.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* location */}
        <div className="  rounded bg-white box-border h-[614.25px] w-[308px] text-xs text-black border-[1px] border-solid border-[#DDDFE2] outline-dashed outline-primary">
          <div className=" w-[calc(100%_-_33.6px)] top-[181.8px] right-[16.8px] left-[16.8px] flex flex-row pt-0 pb-2 pr-[141.39999389648438px] pl-0 box-border items-start justify-start gap-[8px] text-xl text-black">
            <b className=" text-xs leading-[18.57px]">Excellent location</b>
          </div>
          <div className=" w-[calc(100%_-_33.6px)] top-[209.8px] right-[16.8px] left-[16.8px] box-border h-[8.8px] border-b-[0.8px] border-solid border-[#DDDFE2]" />
          <div className=" w-[calc(100%_-_33.6px)] top-[218.6px] right-[16.8px] left-[16.8px] flex flex-row pt-[8.800000190734863px] pb-0 pr-[0.0099945068359375px] pl-0 box-border items-end justify-start text-3xl">
            <div className="w-[137.2px] flex flex-row pt-0 pb-[1.1899998188018799px] pr-[87.19999694824219px] pl-0 box-border items-start justify-start text-sm text-black">
              <div className=" leading-[20px]">Parking</div>
            </div>
            <div className="w-[109.75px] flex flex-row pt-0 pb-[1.1899998188018799px] pr-0 pl-[77.91000366210938px] box-border items-start justify-end text-right text-smi text-[#32A923]">
              <div className=" leading-[20px]">FREE</div>
            </div>
          </div>
          <div className=" w-[calc(100%_-_33.6px)] top-[248.58px] right-[16.8px] left-[16.8px] box-border h-[8.8px] border-b-[0.8px] border-solid border-[#DDDFE2]" />
          <div className="  w-[calc(100%_-_33.6px)] top-[16.8px] right-[16.8px] left-[16.8px] rounded h-[95px] overflow-hidden text-center text-smi">
            <div className="  h-[calc(100%_+_19px)] w-[calc(100%_+_54.88px)] top-[-14.5px] right-[-27.44px] bottom-[-4.5px] left-[-27.44px] overflow-hidden flex flex-row py-0 px-[67.91272735595703px] box-border items-start justify-center">
              <img
                className=" cursor-pointer  w-[193.45px] h-[114px] overflow-hidden shrink-0"
                alt=""
                src="/propertymapentry1svg.svg"
              />
            </div>
            <b className=" cursor-pointer  top-[72.6px] left-[106.4px] uppercase flex items-center justify-center w-[61.8px] h-[16.8px]">
              See map
            </b>
          </div>
          <div className=" w-[calc(100%_-_33.6px)] top-[121.47px] right-[16.8px] left-[16.8px] rounded-sm flex flex-row pt-0 pb-[6.340002059936523px] pr-[132.5399932861328px] pl-0 box-border items-start justify-start text-center text-[15px] text-black">
            <div className="w-[141.86px] flex flex-col items-center justify-start gap-[0.47px]">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-row pt-0 pb-[0.3299999237060547px] pr-[0.5px] pl-0 items-start justify-center">
                  <div className=" leading-[20.33px] font-semibold">8.8</div>
                </div>
                <div className="flex flex-row pt-0 pb-[0.3299999237060547px] pr-[0.029998779296875px] pl-0 items-start justify-center text-base">
                  <div className=" leading-[20.33px] font-semibold">
                    Excellent
                  </div>
                </div>
              </div>
              <div className="w-[141.86px] overflow-hidden flex flex-row pt-0 pb-[0.1900005340576172px] pr-[0.8600006103515625px] pl-px box-border items-start justify-center text-sm text-slategray">
                <div className=" leading-[18.19px]">Location rating score</div>
              </div>
            </div>
          </div>
          <div className=" w-[calc(100%_-_33.6px)] top-[257.39px] right-[16.8px] left-[16.8px] h-[341.7px] overflow-hidden">
            <div className=" top-[-1px] left-[0px] text-sm leading-[18.19px] font-semibold text-black bg-white py-2 z-20 w-full">
              Nearby landmarks
            </div>
            <div className=" w-full top-[0px] right-[0px] left-[0px] overflow-auto flex flex-row pt-[14.800000190734863px] px-0 pb-[0.00001811981201171875px] box-border items-start justify-start">
              <div className=" w-[274.4px] h-[344.99px]">
                <div className=" flex w-full h-full flex-col">
                  {nearby.map((n) => {
                    return (
                      <div className=" my-6">
                        <div className=" left-[0px] overflow-auto flex flex-row pt-0 pb-[0.19999998807907104px] pr-[2.0699996948242188px] pl-0 box-border items-start justify-start">
                          <div className=" leading-[16px]">{n.name}</div>
                        </div>
                        <div className=" right-[0.61px] leading-[16px] text-right">
                          {n.distance}
                        </div>
                      </div>
                    );
                  })}
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
