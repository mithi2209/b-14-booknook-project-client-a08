"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  ImageIcon,
  Plus,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AddBooksForm = () => {

  const router = useRouter();
  
  const { data: session } = authClient.useSession();

  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  const [photoURL, setPhotoURL] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Uploading file image
    const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("image", file);

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Image upload failed");
    }

    return data.imageUrl;
  };

    
    // /handle add book/ 
    const handleAddBook = async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      try {
        setIsSubmitting(true);

        // get the image URL
        let imageUrl = photoURL.trim();

        // if selected a file, upload it to ImgBB
        if (photoFile) {
          imageUrl = await uploadImage(photoFile);
        }

        //if image was provided
        if (!imageUrl) {
          toast.error("Please provide a book image!");
          return;
        }

     
      const bookData = {
        Title: formData.get("title"),
        Author: formData.get("author"),
        Category: formData.get("category"),
        TotalCopies: Number(formData.get("totalCopies")),
        Image: imageUrl,
        Description: formData.get("description"),
        userName: formData.get("userName"),
        userEmail: formData.get("userEmail"),
      };

        

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/add-books`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
          }
        );

        const data = await res.json();

        
        if (!res.ok) {
          throw new Error(data.message || "Failed to add book");
        }

        
        toast.success("Book added successfully!");
        form.reset();
        router.push("/my-books");
        setPhotoURL("");
        setPhotoFile(null);

      } catch (error) {
        console.error(error);

        toast.error(
          error instanceof Error ? error.message : "Failed to add book!"
        );

      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div className="min-h-screen  px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <div
            className="mb-5 flex h-12 w-12 items-center  mx-auto justify-center
          rounded-2xl bg-secondary text-secondary-foreground"
          >
            <BookOpen size={24} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Add a New Book
          </h1>

          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Share a favorite read with the BookNook community.
          </p>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm
          text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Add Book Form */}
        <form
          onSubmit={handleAddBook}
          className="space-y-8 rounded-2xl border border-border
          bg-card p-5 shadow-sm sm:p-8"
        >
          {/* Book Information */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Book Information</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Enter the details of the book you want to share.
              </p>
            </div>

            {/* Book Title */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Book Title <span className="text-destructive">*</span>
              </label>

              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter book title"
                required
                className="h-11 w-full rounded-lg border border-input
                bg-background px-3 text-sm text-foreground
                placeholder:text-muted-foreground
                outline-none transition
                focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Author + Category */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="author" className="text-sm font-medium">
                  Author Name <span className="text-destructive">*</span>
                </label>

                <input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Enter author name"
                  required
                  className="h-11 w-full rounded-lg border border-input
                  bg-background px-3 text-sm text-foreground
                  placeholder:text-muted-foreground
                  outline-none transition
                  focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category <span className="text-destructive">*</span>
                </label>

                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-lg border border-input
                  bg-background px-3 text-sm text-foreground
                  outline-none transition
                  focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Fiction">Fiction</option>
                  <option value="Fiction">Finance</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="History">Thriller</option>
                  <option value="Classic">Classic</option>
                  <option value="Romance">Romance</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* Total Copies */}
            <div className="space-y-2">
              <label htmlFor="totalCopies" className="text-sm font-medium">
                Total Copies <span className="text-destructive">*</span>
              </label>

              <input
                id="totalCopies"
                name="totalCopies"
                type="number"
                min="1"
                defaultValue="1"
                required
                placeholder="Enter total copies"
                className="h-11 w-full rounded-lg border border-input
                bg-background px-3 text-sm text-foreground
                placeholder:text-muted-foreground
                outline-none transition
                focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Book Image */}
            <div className="space-y-1.5">
              <Label>
                Book Image <span className="font-normal text-[#85896B]"></span>
              </Label>

              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <ImageIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />
                  <Input
                    type="url"
                    placeholder="Paste photo URL"
                    value={photoURL}
                    onChange={(e) => {
                      setPhotoURL(e.target.value);
                      setPhotoFile(null);
                    }}
                    className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F] h-11 w-full "
                  />
                </div>

                <label className="flex min-h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-[#85896B] bg-[#A9B49A]/20 px-3 text-sm font-medium text-[#49372D] transition hover:bg-[#A9B49A]/40 dark:text-[#FAF0DF] sm:max-w-36.25">
                  <Upload className="h-4 w-4" />
                  <span className="max-w-26.25 truncate">
                    {photoFile ? photoFile.name : "Upload Photo"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setPhotoFile(file);
                      if (file) setPhotoURL("");
                    }}
                  />
                </label>
              </div>
              <p className="text-xs text-[#85896B] dark:text-[#A9B49A]">
                Use a photo URL or upload an image from your device.
              </p>
            </div>

            {/* Short Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Short Description <span className="text-destructive">*</span>
              </label>

              <textarea
                id="description"
                name="description"
                rows={4}
                required
                placeholder="Write a short description about this book..."
                className="w-full resize-y rounded-lg border
                border-input bg-background px-3 py-3 text-sm
                text-foreground placeholder:text-muted-foreground
                outline-none transition
                focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* User Information */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Contributor Information</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Your account information is attached to this book.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* User Name */}
              <div className="space-y-2">
                <label htmlFor="userName" className="text-sm font-medium">
                  User Name
                </label>

                <input
                  id="userName"
                  name="userName"
                  type="text"
                  value={userName ?? ""}
                  readOnly
                  className="h-11 w-full rounded-lg border border-input
                  bg-background px-3 text-sm text-foreground
                  placeholder:text-muted-foreground
                  outline-none transition
                  focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              {/* User Email */}
              <div className="space-y-2">
                <label htmlFor="userEmail" className="text-sm font-medium">
                  User Email
                </label>

                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  value={userEmail ?? ""}
                  readOnly
                  className="h-11 w-full rounded-lg border border-input
                  bg-background px-3 text-sm text-foreground
                  placeholder:text-muted-foreground
                  outline-none transition
                  focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div
            className="flex flex-col-reverse gap-3 border-t
          border-border pt-6 sm:flex-row sm:justify-end"
          >
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center
              rounded-lg border border-border px-5 text-sm
              font-medium transition hover:bg-muted"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                "Adding Book..." 
              ) : (
                <>
                  <Plus size={18} />
                  Add Book
                </>
              )}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooksForm;
