import csv
import json

# Extract data and write to CSV
with open("C:\\Users\\USER\\Desktop\\React Projects\\panhandlr\\src\\users.json", "r", encoding="utf-8") as file:
    users = json.load(file)

# Define CSV file name
csv_filename = "users_data.csv"

with open(csv_filename, mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)

    # Write header
    writer.writerow([
        "ID", "Name", "Avatar", "Amount Raised", "Raised Today", "Raised This Week", "Raised This Month",
        "Bio", "Twitter", "Instagram", "Recent Donations", "Region", "Tags"
    ])

    # Write user data
    for user in users:
        writer.writerow([
            user["id"],
            user["name"],
            user["avatar"],
            user["amountRaised"],
            user["raisedToday"],
            user["raisedThisWeek"],
            user["raisedThisMonth"],
            user["bio"],
            user["socialLinks"].get("twitter", ""),
            user["socialLinks"].get("instagram", ""),
            "; ".join([f"{d['name']} (${d['amount']}, {d['timeago']})" for d in user["recentDonations"]]),
            user["region"],
            ", ".join(user["tags"])
        ])

print(f"CSV file '{csv_filename}' has been created successfully.")