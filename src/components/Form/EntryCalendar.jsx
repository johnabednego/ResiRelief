import React from 'react';
import moment from 'moment';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const EntryCalendar = ({name,showCalendar, selectDate, selectedDate,setSelectedDate }) => {
  
  const goToPreviousMonth = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'month'));
  };
  
  const goToNextMonth = () => {
    setSelectedDate(selectedDate.clone().add(1, 'month'));
  };
  
  
  const renderCalendar = () => {
    const currentDate = moment();
    const calendarDates = [];

    const month = selectedDate.clone();
    const firstDayOfMonth = month.startOf('month').format('d');
    const daysInMonth = month.daysInMonth();

    const weekdays = moment.weekdaysShort();

    const monthDates = [];

    const weekdaySubtitles = weekdays.map((weekday) => (
      <div key={weekday} className="font-bold text-gray-600 text-center">
        {weekday}
      </div>
    ));

    for (let i = 0; i < firstDayOfMonth; i++) {
      monthDates.push(<div key={`empty-${i}`} className="p-2 text-gray-400"></div>);
    }

    for (let j = 1; j <= daysInMonth; j++) {
      const date = month.clone().date(j);
      const disabled = date.isBefore(currentDate, 'day');
      const isSelected = date.isSame(selectedDate, 'day');

      const dayStyles = isSelected
        ? 'p-2 text-white bg-blue-500 cursor-pointer day selected'
        : `p-2 ${disabled ? 'text-gray-400' : 'text-black'} cursor-pointer day`;

      monthDates.push(
        <div
          key={date.format('YYYY-MM-DD')}
          className={dayStyles}
          onClick={() => !disabled && selectDate(date)}
          style={{ backgroundColor: isSelected ? '#3b82f6' : '' }}
          onMouseEnter={(e) => {
            if (!isSelected) {
              e.target.style.backgroundColor = '#f1f1f1';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSelected) {
              e.target.style.backgroundColor = '';
            }
          }}
        >
          {date.format('D')}
        </div>
      );
    }

    calendarDates.push(
      <div key={month.format('YYYY-MM')} className="mb-4">
        <div className="flex justify-between mb-2">
          <button className="text-lg text-blue-500 cursor-pointer" onClick={goToPreviousMonth}>
            <IoIosArrowBack/>
          </button>
          <div className="font-bold text-lg">{month.format('MMM YYYY')}</div>
          <button className="text-lg text-blue-500 cursor-pointer" onClick={goToNextMonth}>
           <IoIosArrowForward/>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {weekdaySubtitles}
          {monthDates}
        </div>
      </div>
    );

    return calendarDates;
  };
  
  

  
  return (
    <div className='  flex justify-center calender_display absolute z-40'>
      {name==="sm_entry" || name==="sm_depart"?
       <div className={name==="sm_entry"?'sm_entry ml-[0px] lg:ml-[-15rem] sm_calender  mt-[1rem] absolute z-50 w-[300px]':'sm_entry ml-[0px] lg:ml-[12rem] sm_calender  mt-[6rem] md:mt-[1rem] absolute z-50 w-[300px]'}>
       <div className="relative">
         {showCalendar && (
           <div className="absolute top-12 bg-white shadow-lg rounded-[6px] p-4  border-[1px] border-primary">
             {renderCalendar()}
           </div>
         )}
       </div>
     </div>:
      <div className={name==="entry"?' sm_calender  absolute z-50 w-[300px] ml-[300px]':'sm_calender ml-8 sm:ml-[20rem] lg:ml-[23rem] xl:ml-[-16rem] mt-[-3.4rem] lg:mt-[-3rem] xl:mt-[-2rem] absolute z-50 w-[300px]'}>
      <div className="relative">
        {showCalendar && (
          <div className="absolute top-12 bg-white shadow-lg rounded-[6px] p-4  border-[1px] border-primary">
            {renderCalendar()}
          </div>
        )}
      </div>
    </div>}
    </div>
  );
};

export default EntryCalendar;
