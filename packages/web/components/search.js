import { useState } from "react";
import SearchUser from "../components/search-user";
import Image from "next/image";
import hero from "../public/hero.svg";

export default function Search() {
  const [username, setUsername] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `https://quadratictrust.com/api/search/${username}`
    );
    const result = await res.json();
    setSearchResult(result.users);
  };
  const handleChange = (event) => {
    setUsername(event.target.value);
    if (username === "") {
      setSearchResult([]);
    }
  };
  return (
    <>
      <div className="flex flex-col font-raleway mt-8 sm:-mt-6 md:mt-2">
        <Image src={hero} alt="Hero" />
        <form onSubmit={handleSubmit}>
          <div className="hidden sm:block justify-center mt-3">
            <div className="flex flex-row space-x-4 lg:space-x-8 justify-center">
              <input
                className="flex-grow max-w-md md:max-w-lg placeholder-trust-blue tracking-widest block bg-white border-2 border-trust-blue rounded-md p-4 text-trust-blue"
                type="search"
                placeholder="SEARCH @USERNAME"
                value={username}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="inline-flex text-xl tracking-widest bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-trust-blue hover:border-trust-blue px-8 py-4 hover:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 920 872"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="group">
                    <path
                      id="Path"
                      d="M920 214 C896 250 864.667 282.667 826 312 L826 336 C826 422.667 806 506 766 586 726 666 664 733.667 580 789 496 844.333 399.333 872 290 872 183.333 872 86.667 844 0 788 9.333 789.333 24.667 790 46 790 134 790 212 763.333 280 710 238.667 708.667 202 696 170 672 138 648 116 616.667 104 578 110.667 580.667 122 582 138 582 155.333 582 172 580 188 576 144 566.667 108 544.667 80 510 52 475.333 38 435.333 38 390 L38 388 C62 401.333 90 409.333 122 412 66 373.333 38 320.667 38 254 38 222 46.667 190.667 64 160 166.667 285.333 296.667 350.667 454 356 450 344 448 330 448 314 448 262 466.333 217.667 503 181 539.667 144.333 584.667 126 638 126 692.667 126 738 145.333 774 184 814 176 854 161.333 894 140 880.667 184 853.333 218.667 812 244 849.333 238.667 885.333 228.667 920 214 Z"
                      fillOpacity="1"
                      stroke="none"
                    />
                  </g>
                </svg>
                <span className="ml-2">SEARCH</span>
              </button>
            </div>
          </div>
          <div className="sm:hidden flex flex-col justify-center space-y-8 mt-3">
            <input
              className="ml-4 p-4 w-11/12 tracking-widest bg-white placeholder-trust-blue border-2 border-trust-blue rounded-md text-trust-blue"
              type="search"
              placeholder="SEARCH @USERNAME"
              value={username}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="inline-flex mx-auto w-48 text-xl tracking-widest bg-trust-blue hover:bg-trust-yellow border-2 font-semibold hover:text-trust-blue text-white border-trust-blue px-8 py-4 hover:border-trust-blue rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trust-blue"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 920 872"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="group">
                  <path
                    id="Path"
                    d="M920 214 C896 250 864.667 282.667 826 312 L826 336 C826 422.667 806 506 766 586 726 666 664 733.667 580 789 496 844.333 399.333 872 290 872 183.333 872 86.667 844 0 788 9.333 789.333 24.667 790 46 790 134 790 212 763.333 280 710 238.667 708.667 202 696 170 672 138 648 116 616.667 104 578 110.667 580.667 122 582 138 582 155.333 582 172 580 188 576 144 566.667 108 544.667 80 510 52 475.333 38 435.333 38 390 L38 388 C62 401.333 90 409.333 122 412 66 373.333 38 320.667 38 254 38 222 46.667 190.667 64 160 166.667 285.333 296.667 350.667 454 356 450 344 448 330 448 314 448 262 466.333 217.667 503 181 539.667 144.333 584.667 126 638 126 692.667 126 738 145.333 774 184 814 176 854 161.333 894 140 880.667 184 853.333 218.667 812 244 849.333 238.667 885.333 228.667 920 214 Z"
                    fillOpacity="1"
                    stroke="none"
                  />
                </g>
              </svg>
              <span className="ml-2">SEARCH</span>
            </button>
          </div>
        </form>
      </div>
      {username &&
        searchResult &&
        searchResult.map((searchItem, index) => (
          <SearchUser key={index} user={searchItem} />
        ))}
    </>
  );
}
