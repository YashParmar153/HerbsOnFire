"use client";
import * as React from "react";

export function UserIcon() {
  return (
    <div className="relative ml-auto">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="1057:190" width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="user-icon" style="width: 40px; height: 44px; flex-shrink: 0; position: relative; z-index: 2"> <path d="M33.3337 38.5V34.8333C33.3337 32.8884 32.6313 31.0232 31.381 29.6479C30.1308 28.2726 28.4351 27.5 26.667 27.5H13.3337C11.5655 27.5 9.86986 28.2726 8.61961 29.6479C7.36937 31.0232 6.66699 32.8884 6.66699 34.8333V38.5M26.667 12.8333C26.667 16.8834 23.6822 20.1667 20.0003 20.1667C16.3184 20.1667 13.3337 16.8834 13.3337 12.8333C13.3337 8.78325 16.3184 5.5 20.0003 5.5C23.6822 5.5 26.667 8.78325 26.667 12.8333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="1057:191" width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg" class="user-background" style="width: 65px; height: 59px; flex-shrink: 0; position: absolute; left: -12px; top: -7px; z-index: 1"> <ellipse cx="32.5" cy="29.5" rx="32.5" ry="29.5" fill="black" fill-opacity="0.61"></ellipse> </svg>',
          }}
        />
      </div>
    </div>
  );
}
