export default function SettingsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Settings</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4 text-black">Store Settings</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Store Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Contact Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Phone Number</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-black">Address</label>
                        <textarea
                            className="w-full p-2 border rounded bg-gray-800 text-white"
                            rows={4}
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
}