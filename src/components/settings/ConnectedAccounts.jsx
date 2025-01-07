import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "ri-google-line",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "ri-facebook-line",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "ri-twitter-x-fill",
		},
	]);
	return (
		<SettingSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className='flex items-center justify-between py-3' >
					<div className='flex items-center gap-1'> 
						<i className="size-6 object-cover rounded-full mr-2" style={{ fontSize: '18px' }}>
							<i className={account.icon}></i>
						</i>
						<span style={{color: "var(--text-color)" }}>{account.name}</span>
					</div>

					<button
						className={`px-3 py-1 rounded ${account.connected ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-600 hover:bg-gray-700"
							} transition duration-200`}
						onClick={() => {
							setConnectedAccounts(
								connectedAccounts.map((acc) => {
									if (acc.id === account.id) {
										return {
											...acc,
											connected: !acc.connected,
										};
									}
									return acc;
								})
							);
						}}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
				</div>
			))}
			<button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
		</SettingSection>
	);
};
export default ConnectedAccounts;
