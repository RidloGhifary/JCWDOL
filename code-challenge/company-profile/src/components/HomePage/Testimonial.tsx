import React from "react";
import SectionTitle from "../SectionTitle";
import { Quote } from "lucide-react";
import client from "../../utils/contentful";
import { sanitizeEntries } from "../../utils/sanitizeEntries";

export interface Entry {
  sys: {
    id: string;
  };
  fields: {
    comment: string;
    userImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    username: string;
    createdAt: string;
  };
}

const Testimonial: React.FC = () => {
  const [entries, setEntries] = React.useState<Entry[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "testimonialCarrental",
        });
        const sanitizedEntries = sanitizeEntries(response.items);
        setEntries(sanitizedEntries);
      } catch (err) {
        setError("Error fetching data from Contentful");
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="-mt-16 space-y-12 bg-backgroundLightGray p-4 py-16 md:px-14">
      <SectionTitle
        title="Client's Testimonials"
        subTitle="Reviewed by People"
        description="Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
      />

      <div className="grid items-center justify-center gap-4 md:grid-cols-2">
        {entries?.map((entry) => (
          <div
            key={entry?.sys?.id}
            className="rounded-md bg-white p-8 shadow-md"
          >
            <p className="line-clamp-3 font-medium text-black">
              {entry?.fields.comment}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={entry?.fields?.userImage?.fields?.file?.url}
                  alt={entry?.fields?.username}
                  width="50px"
                  height="50px"
                  loading="lazy"
                  className="h-[50px] w-[50px] rounded-full object-cover object-center"
                />
                <div>
                  <p className="text-lg font-medium">
                    {entry?.fields?.username}
                  </p>
                  <time className="block text-sm text-secondaryTextGray">
                    {entry?.fields?.createdAt}
                  </time>
                </div>
              </div>
              <Quote size={60} color="#f47920" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
