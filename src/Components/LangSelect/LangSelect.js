import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { withTranslation } from "react-i18next";
import "./LangSelect.scss";

const LangSelect = ({ value, setValue, t, ...props }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Select
      sx={{
        position: "absolute",
        right: "351px",
        height: "38px",
        minWidth: "173px",
      }}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      //   label={t("lang")}
      onChange={handleChange}
    >
      <MenuItem value={"ru-RU"}>
        <span className="select-lang-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M0 12H22V17C22 17.5523 21.5523 18 21 18H1C0.447716 18 0 17.5523 0 17V12Z"
              fill="#DB3156"
            />
            <path d="M0 6H22V12H0V6Z" fill="#2C5CC5" />
            <path
              d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1V6H0V1Z"
              fill="#F8F8F8"
            />
          </svg>
          <p>Русский</p>
        </span>
      </MenuItem>
      <MenuItem value={"en-US"}>
        <span className="select-lang-item">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="2.57153" width="22" height="12.8571" rx="4" fill="white" />
            <mask
              id="mask0_211_116"
              style={{ "mask-type": "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="22"
              height="14"
            >
              <rect
                y="2.57153"
                width="22"
                height="12.8571"
                rx="2"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_211_116)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 2.57153H0V3.42868H22V2.57153ZM22 4.28582H0V5.14296H22V4.28582ZM0 6.0001H22V6.85725H0V6.0001ZM22 7.71439H0V8.57153H22V7.71439ZM0 9.42868H22V10.2858H0V9.42868ZM22 11.143H0V12.0001H22V11.143ZM0 12.8572H22V13.7144H0V12.8572ZM22 14.5715H0V15.4287H22V14.5715Z"
                fill="#D02F44"
              />
              <rect y="2.57153" width="9.42857" height="6" fill="#46467F" />
              <g filter="url(#filter0_d_211_116)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.57142 4.28585C1.86071 4.28585 2.09523 4.09398 2.09523 3.85728C2.09523 3.62059 1.86071 3.42871 1.57142 3.42871C1.28212 3.42871 1.04761 3.62059 1.04761 3.85728C1.04761 4.09398 1.28212 4.28585 1.57142 4.28585ZM3.66666 4.28585C3.95595 4.28585 4.19046 4.09398 4.19046 3.85728C4.19046 3.62059 3.95595 3.42871 3.66666 3.42871C3.37736 3.42871 3.14285 3.62059 3.14285 3.85728C3.14285 4.09398 3.37736 4.28585 3.66666 4.28585ZM6.2857 3.85728C6.2857 4.09398 6.05119 4.28585 5.76189 4.28585C5.4726 4.28585 5.23808 4.09398 5.23808 3.85728C5.23808 3.62059 5.4726 3.42871 5.76189 3.42871C6.05119 3.42871 6.2857 3.62059 6.2857 3.85728ZM7.85713 4.28585C8.14642 4.28585 8.38094 4.09398 8.38094 3.85728C8.38094 3.62059 8.14642 3.42871 7.85713 3.42871C7.56784 3.42871 7.33332 3.62059 7.33332 3.85728C7.33332 4.09398 7.56784 4.28585 7.85713 4.28585ZM3.14285 4.71442C3.14285 4.95112 2.90833 5.143 2.61904 5.143C2.32974 5.143 2.09523 4.95112 2.09523 4.71442C2.09523 4.47773 2.32974 4.28585 2.61904 4.28585C2.90833 4.28585 3.14285 4.47773 3.14285 4.71442ZM4.71427 5.143C5.00357 5.143 5.23808 4.95112 5.23808 4.71442C5.23808 4.47773 5.00357 4.28585 4.71427 4.28585C4.42498 4.28585 4.19046 4.47773 4.19046 4.71442C4.19046 4.95112 4.42498 5.143 4.71427 5.143ZM7.33332 4.71442C7.33332 4.95112 7.0988 5.143 6.80951 5.143C6.52022 5.143 6.2857 4.95112 6.2857 4.71442C6.2857 4.47773 6.52022 4.28585 6.80951 4.28585C7.0988 4.28585 7.33332 4.47773 7.33332 4.71442ZM7.85713 6.00014C8.14642 6.00014 8.38094 5.80826 8.38094 5.57157C8.38094 5.33487 8.14642 5.143 7.85713 5.143C7.56784 5.143 7.33332 5.33487 7.33332 5.57157C7.33332 5.80826 7.56784 6.00014 7.85713 6.00014ZM6.2857 5.57157C6.2857 5.80826 6.05119 6.00014 5.76189 6.00014C5.4726 6.00014 5.23808 5.80826 5.23808 5.57157C5.23808 5.33487 5.4726 5.143 5.76189 5.143C6.05119 5.143 6.2857 5.33487 6.2857 5.57157ZM3.66666 6.00014C3.95595 6.00014 4.19046 5.80826 4.19046 5.57157C4.19046 5.33487 3.95595 5.143 3.66666 5.143C3.37736 5.143 3.14285 5.33487 3.14285 5.57157C3.14285 5.80826 3.37736 6.00014 3.66666 6.00014ZM2.09523 5.57157C2.09523 5.80826 1.86071 6.00014 1.57142 6.00014C1.28212 6.00014 1.04761 5.80826 1.04761 5.57157C1.04761 5.33487 1.28212 5.143 1.57142 5.143C1.86071 5.143 2.09523 5.33487 2.09523 5.57157ZM2.61904 6.85728C2.90833 6.85728 3.14285 6.6654 3.14285 6.42871C3.14285 6.19202 2.90833 6.00014 2.61904 6.00014C2.32974 6.00014 2.09523 6.19202 2.09523 6.42871C2.09523 6.6654 2.32974 6.85728 2.61904 6.85728ZM5.23808 6.42871C5.23808 6.6654 5.00357 6.85728 4.71427 6.85728C4.42498 6.85728 4.19046 6.6654 4.19046 6.42871C4.19046 6.19202 4.42498 6.00014 4.71427 6.00014C5.00357 6.00014 5.23808 6.19202 5.23808 6.42871ZM6.80951 6.85728C7.0988 6.85728 7.33332 6.6654 7.33332 6.42871C7.33332 6.19202 7.0988 6.00014 6.80951 6.00014C6.52022 6.00014 6.2857 6.19202 6.2857 6.42871C6.2857 6.6654 6.52022 6.85728 6.80951 6.85728ZM8.38094 7.28585C8.38094 7.52255 8.14642 7.71443 7.85713 7.71443C7.56784 7.71443 7.33332 7.52255 7.33332 7.28585C7.33332 7.04916 7.56784 6.85728 7.85713 6.85728C8.14642 6.85728 8.38094 7.04916 8.38094 7.28585ZM5.76189 7.71443C6.05119 7.71443 6.2857 7.52255 6.2857 7.28585C6.2857 7.04916 6.05119 6.85728 5.76189 6.85728C5.4726 6.85728 5.23808 7.04916 5.23808 7.28585C5.23808 7.52255 5.4726 7.71443 5.76189 7.71443ZM4.19046 7.28585C4.19046 7.52255 3.95595 7.71443 3.66666 7.71443C3.37736 7.71443 3.14285 7.52255 3.14285 7.28585C3.14285 7.04916 3.37736 6.85728 3.66666 6.85728C3.95595 6.85728 4.19046 7.04916 4.19046 7.28585ZM1.57142 7.71443C1.86071 7.71443 2.09523 7.52255 2.09523 7.28585C2.09523 7.04916 1.86071 6.85728 1.57142 6.85728C1.28212 6.85728 1.04761 7.04916 1.04761 7.28585C1.04761 7.52255 1.28212 7.71443 1.57142 7.71443Z"
                  fill="url(#paint0_linear_211_116)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_211_116"
                x="1.04761"
                y="3.42871"
                width="7.33337"
                height="6.28564"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_211_116"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_211_116"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_211_116"
                x1="1.04761"
                y1="3.42871"
                x2="1.04761"
                y2="7.71443"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#F0F0F0" />
              </linearGradient>
            </defs>
          </svg>

          <p>English</p>
        </span>
      </MenuItem>
      <MenuItem value={"uk-UA"}>
        <span className="select-lang-item">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.57153C0 3.46696 0.895431 2.57153 2 2.57153H20C21.1046 2.57153 22 3.46696 22 4.57153V13.4287C22 14.5332 21.1046 15.4287 20 15.4287H2C0.89543 15.4287 0 14.5332 0 13.4287V4.57153Z"
              fill="white"
            />
            <mask
              id="mask0_211_155"
              style={{ "mask-type": "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="22"
              height="14"
            >
              <path
                d="M0 4.57153C0 3.46696 0.895431 2.57153 2 2.57153H20C21.1046 2.57153 22 3.46696 22 4.57153V13.4287C22 14.5332 21.1046 15.4287 20 15.4287H2C0.89543 15.4287 0 14.5332 0 13.4287V4.57153Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_211_155)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 9.42868H22V2.57153H0V9.42868Z"
                fill="#156DD1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 15.4287H22V9.42871H0V15.4287Z"
                fill="#FFD948"
              />
            </g>
          </svg>
          <p>Українська</p>
        </span>
      </MenuItem>
      <MenuItem value={"de-DE"}>
        <span className="select-lang-item">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.57153C0 3.46696 0.895431 2.57153 2 2.57153H20C21.1046 2.57153 22 3.46696 22 4.57153V13.4287C22 14.5332 21.1046 15.4287 20 15.4287H2C0.89543 15.4287 0 14.5332 0 13.4287V4.57153Z"
              fill="white"
            />
            <mask
              id="mask0_211_168"
              style={{ "mask-type": "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="22"
              height="14"
            >
              <path
                d="M0 4.57153C0 3.46696 0.895431 2.57153 2 2.57153H20C21.1046 2.57153 22 3.46696 22 4.57153V13.4287C22 14.5332 21.1046 15.4287 20 15.4287H2C0.89543 15.4287 0 14.5332 0 13.4287V4.57153Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_211_168)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.85725H22V2.57153H0V6.85725Z"
                fill="#262626"
              />
              <g filter="url(#filter0_d_211_168)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 11.1429H22V6.85718H0V11.1429Z"
                  fill="#F01515"
                />
              </g>
              <g filter="url(#filter1_d_211_168)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15.4288H22V11.1431H0V15.4288Z"
                  fill="#FFD521"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_211_168"
                x="0"
                y="6.85718"
                width="22"
                height="4.28564"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_211_168"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_211_168"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_211_168"
                x="0"
                y="11.1431"
                width="22"
                height="4.28564"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_211_168"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_211_168"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <p>Deutsche</p>
        </span>
      </MenuItem>
      <MenuItem value={"fr-FR"}>
        <span className="select-lang-item">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 4.57153C0.5 3.74311 1.17157 3.07153 2 3.07153H20C20.8284 3.07153 21.5 3.74311 21.5 4.57153V13.4287C21.5 14.2571 20.8284 14.9287 20 14.9287H2C1.17157 14.9287 0.5 14.2571 0.5 13.4287V4.57153Z"
              fill="white"
              stroke="#F5F5F5"
            />
            <mask
              id="mask0_211_181"
              style={{ "mask-type": "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="22"
              height="14"
            >
              <path
                d="M0.5 4.57153C0.5 3.74311 1.17157 3.07153 2 3.07153H20C20.8284 3.07153 21.5 3.74311 21.5 4.57153V13.4287C21.5 14.2571 20.8284 14.9287 20 14.9287H2C1.17157 14.9287 0.5 14.2571 0.5 13.4287V4.57153Z"
                fill="white"
                stroke="white"
              />
            </mask>
            <g mask="url(#mask0_211_181)">
              <path
                d="M14.6666 2.57153H20C21.1045 2.57153 22 3.46696 22 4.57153V13.4287C22 14.5332 21.1045 15.4287 20 15.4287H14.6666V2.57153Z"
                fill="#F44653"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 15.4287H7.33333V2.57153H0V15.4287Z"
                fill="#1035BB"
              />
            </g>
          </svg>
          <p>Français</p>
        </span>
      </MenuItem>
    </Select>
  );
};

export default withTranslation()(LangSelect);
