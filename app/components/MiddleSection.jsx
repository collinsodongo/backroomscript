"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSubscriptionStore } from "@/app/store/SubscriptionStore";
import { useAuthStore } from "@/app/store/AuthStore";
import { toast } from "sonner";
import PricingGrid from "@/app/components/PricingGrid";
import SectionHeading from "@/app/components/SectionHeading";
import FeatureCard from "@/app/components/FeatureCard";
import CtaBanner from "@/app/components/CtaBanner";
import styles from "@/app/style/middleSection.module.css";
import {
  IoHeart as HeartIcon,
  IoShield as ShieldIcon,
  IoSparkles as SparklesIcon,
  IoFlower as FlowerIcon,
} from "react-icons/io5";

import { FaCrown as CrownIcon } from "react-icons/fa";

export default function MiddleSection() {
  const router = useRouter();
  const { isAuth, currentTier } = useAuthStore();

  const tiersObject = useSubscriptionStore((state) => state.tiers);
  const getTierLevel = useSubscriptionStore((state) => state.getTierLevel);
  const initializePayment = useSubscriptionStore((state) => state.initializePayment);
  const paymentLoading = useSubscriptionStore((state) => state.paymentLoading);

  const tiers = useMemo(() => Object.values(tiersObject), [tiersObject]);

  const [loadingTier, setLoadingTier] = useState(null);

  const features = [
    {
      icon: <HeartIcon />,
      title: "Real Skills",
      description:
        "Learn practical skills taught by instructors who work in the field.",
    },
    {
      icon: <ShieldIcon />,
      title: "Recognised Certification",
      description:
        "Pass the certification and prove your skills to hiring companies.",
    },
    {
      icon: <SparklesIcon />,
      title: "Job Access",
      description:
        "Certified students get jobs through their profile from our hiring partners.",
    },
    {
      icon: <CrownIcon />,
      title: "Community",
      description: "Learn alongside other students in our WhatsApp community.",
    },
  ];

  const steps = [
    {
      icon: <HeartIcon />,
      title: "Enrol",
      description:
        "Select the plan that matches your goals and join the school.",
    },
    {
      icon: <SparklesIcon />,
      title: "Learn & Get Certified",
      description:
        "Work through the course material, join the community and pass your certification.",
    },
    {
      icon: <FlowerIcon />,
      title: "Get Hired",
      description:
        "Access jobs through your profile from the wider range of companies that hire through us.",
    },
  ];

  const handleSelectTier = async (tier) => {
    if (!isAuth) {
      toast.error("Please login to upgrade your tier");
      router.push("/authentication/login");
      return;
    }

    if (tier.id === "starter") {
      toast.info("Starter tier is free and available to all users!");
      return;
    }

    if (currentTier === tier.id) {
      toast.info(`You're already on the ${tier.name} tier!`);
      return;
    }

    const currentLevel = getTierLevel(currentTier);
    const targetLevel = getTierLevel(tier.id);
    
    if (targetLevel < currentLevel) {
      toast.info("Please contact support to downgrade your plan");
      return;
    }

    setLoadingTier(tier.id);

    try {
      const result = await initializePayment(tier.id);

      if (result.success) {
        toast.success("Redirecting to payment...");
        window.location.href = result.data.authorizationUrl;
      } else {
        toast.error(result.message || "Failed to initialize payment");
      }
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error("Failed to process payment. Please try again.");
    } finally {
      setLoadingTier(null);
    }
  };

  return (
    <section className={styles.middleSection}>
      <div className={styles.middleContainer}>
        <div className={styles.howItWorksSection}>
          <SectionHeading
            before="The way you join our"
            accent="school"
            subtitle="Three simple steps from learning to employment"
          />

          <div className={styles.stepsGrid}>
            {steps.map((step, i) => (
              <div key={i} className={styles.stepCard}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            before="Why students choose"
            accent="BackroomScript"
          />
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <div className={styles.pricingSection}>
          <PricingGrid
            tiers={tiers}
            currentTier={currentTier}
            onSelectTier={handleSelectTier}
            loading={loadingTier}
            variant="default"
            showHeader={true}
            showFooter={true}
            getTierLevel={getTierLevel}
          />
        </div>

        <CtaBanner
          title="Ready to learn, get certified and get hired?"
          description="Join thousands of students building their careers through our school."
          href="/authentication/signup"
          label="Create Free Account"
        />
      </div>
    </section>
  );
}