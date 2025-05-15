const NOTIFICATIONS = [
  { id: "marketing", label: "Marketing & promotional content" },
  { id: "features", label: "Feature updates" },
  { id: "comments", label: "Comments" },
  { id: "friend_updates", label: "Updates from friends" },
  { id: "friend_requests", label: "Friend requests" },
];

const CHANNELS = ["Push", "Email", "SMS"];

export default function Home() {
  return (
    <div>
      <div>
        <h1>Manage Your Notifications</h1>
        <p>
          Choose how you want to be notified about the latest updates and
          messages.
        </p>
        <form>
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {CHANNELS.map((channel) => (
                    <th
                      key={channel}
                    >
                      {channel}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NOTIFICATIONS.map(({ id, label }) => (
                  <tr key={id}>
                    <td>{label}</td>
                    {CHANNELS.map((channel) => (
                      // TODO: Replace with a Reusable Toggle Component
                      <td key={channel}>
                        Toggle
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <button
              type="submit"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
