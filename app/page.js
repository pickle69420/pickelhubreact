'use client'
import { useState,Suspense,lazy,startTransition } from "react";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import MainLoader from "@/components/loader";
import PickleHubIcon from "@/components/pickleicon";

var lazypages = {};
siteConfig.navItems.forEach((tab)=>{
	lazypages[tab.display] = lazy(() => delayForDemo(import('@/components/pages/'+tab.import)));
})

function delayForDemo(promise) {
	return new Promise(resolve => {
	  setTimeout(resolve, 200);
	}).then(() => promise);
  }

export default function Home() {
	var [screen,setScreen] = useState(-1);
	return (
		<main className="absolute w-screen h-screen flex justify-center items-center bg-opacity-20">
			<Suspense fallback={<MainLoader/>}>
				<div className="w-[95vw] h-[95vh] rounded-lg border-gray-300 bg-gray-50 border-[1px] shadow-lg grid grid-cols-[repeat(17,_minmax(0,_1fr))] grid-rows-1 gap-0 ">
					<div className="row-span-1 border-r-[1px] border-gray-300 flex flex-col justify-between">
						<div className="flex flex-col items-center">
							<div className="w-14 h-14 my-3">
								<PickleHubIcon/>
							</div>
							<div className="h-[1px] w-[90%] bg-gray-300"></div>
						</div>
						<div className="flex flex-col justify-center items-center">
							{
								siteConfig.navItems.map((tab)=>
									<div onClick={()=>{
										startTransition(()=>{
											setScreen(tab.id);
										});
									}} key={tab.id} className={clsx(
											"border-[1px] border-gray-300 rounded-lg p-3 mb-2 hover:bg-gray-200 transition-all before:transition-all before:duration-200 before:ease-in-out before:absolute before:w-[4px] before:-translate-x-3 before:block before:bg-gray-500 before:rounded-full",
											(screen == tab.id) ? "before:translate-y-0.5 before:h-6" : "before:translate-y-3 before:h-0"
										)}>
										<tab.icon variant="Linear" className="text-[24px]" size={28}></tab.icon>
									</div>
								)
							}
						</div>
						<div className="flex flex-col items-center">
							<div className="h-[1px] w-[90%] bg-gray-300"></div>
							<div className="bg-gray-800 rounded-full w-14 h-14 my-3"></div>
						</div>
					</div>
					<div className="row-span-1 col-[2_/_span_16]">
						{
							siteConfig.navItems.map((tab)=>{
								const TabContent = lazypages[tab.display]
								return (
									<div key={tab.id} className={clsx("w-full h-full"
										,(screen == tab.id) ? "block" : "hidden"
									)}>
										<TabContent></TabContent>
									</div>
								)
							}
							)
						}
					</div>
				</div>
			</Suspense>
		</main>
	);
}
