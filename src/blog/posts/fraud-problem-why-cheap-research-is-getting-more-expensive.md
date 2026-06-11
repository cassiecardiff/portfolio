---
title: "The fraud problem: why cheap research is getting more expensive"
date: 2026-06-10
summary: AI-moderated research promises faster, cheaper insight. But what happens when fraudsters and AI bots start talking to AI moderators?
tags:
  - post
  - AI
  - Research methods
---

<figure class="post-figure">
  <img src="/assets/img/blog/cassie-zoom.png" alt="Cassie on a Zoom call, hand raised mid-gesture, looking incredulous" />
  <figcaption>Me, once again, flabberghasted by a participant on Zoom.</figcaption>
</figure>

I've lost count of the number of times I've had to say some version of "I don't think you are who you say you are."

It happens more than people outside the industry realise. A participant whose answers are technically correct but somehow hollow. Someone who hesitates on a question they should find easy. A person claiming to volunteer for a children's charity who can't tell me anything about the DBS check process. Someone who said they had an assistance dog but went quiet when I asked about the application journey. One participant — and I genuinely respect the audacity — actually laughed when I caught them out. We both did. Then we hung up, and I went back to find a real participant.

These moments are frustrating, occasionally funny and more often than not invisible in the final research report. They're also a sign of something the industry still doesn't talk about loudly enough: fraud in research is widespread, it's getting worse and a new generation of AI research platforms is quietly making it easier to miss.

## This has always been a quant problem. Now it's a qual problem too.

Incentive fraud has corroded quantitative research for years. The [2024 Greenbook GRIT Insights Practice Report](https://marketing.greenbook.org/hubfs/2024%20GRIT%20Insights%20Practice%20Report/Report%20Downloads%20(Final)/Abbreviated_24GRIT_InsightsPractice_Report.pdf) found that 34% of buyer-side insights professionals said sample-related issues had led to a poor business decision at least once in the previous six months. A [separate study of participants from five of the top ten largest online panel providers](https://qriousinsight.com/survey-panels-where-it-all-went-wrong/) found that almost half failed quality control checks — submitting incoherent answers, speeding through questions or faking responses outright.

Qualitative research had a natural defence against all of this: a human moderator. Someone in the room, or on the call, who could read what was happening and respond to it, probe a suspicious answer, notice the hesitation and ask the question that only a real participant could answer. That defence is disappearing.

[Fraud in research isn't new, but what we're seeing now is different](https://www.userinterviews.com/blog/user-research-fraud-prevention). It's faster, smarter and often indistinguishable from legitimate participation. Fraudsters today don't just guess at screener answers, they share them across social media and forums, coaching each other on what to say to qualify. They use VPNs to spoof their location and virtual numbers to appear local, turning gaming research incentives into a coordinated, low-risk income stream. In the UK, a typical research incentive of £30 for a 30-minute interview is modest by most standards. In parts of the world where research platforms are actively targeted, it can represent a full day's wage or more, which makes the motivation to game the system entirely rational.

## AI moderation removes the last line of defence

A new generation of end-to-end AI research platforms now promises the depth of qualitative insight at something close to survey scale, hundreds of interviews running simultaneously, synthesis in hours, research budgets cut significantly. When there's no human moderator, though, there's nobody to notice the hollow answers, nobody to probe and nobody to ask the surprise question about the DBS check process. AI platforms score responses for relevance and clarity, but a fraudster who has learned what a good answer looks like will score just fine. The tell isn't in what they say, it's in the pause before they say it, the vagueness when you go off-script, the moment they can't answer something a real participant would find obvious. You only catch that if you're there.

That said, AI moderation isn't inherently the problem — it's AI moderation without the right guardrails. We built our own tool, [Sonar](https://torchbox.com/public-sector/ai-powered-qualitative-research-at-scale/), precisely because we could see situations where interviewing at scale genuinely serves participants rather than just cutting costs. When we worked with [Guy's and St Thomas' NHS Foundation Trust](https://torchbox.com/public-sector/blog/a-new-intranet-for-guys-and-st-thomas-nhs-foundation-trust/), we needed to hear from a large number of staff — people working night shifts, people between surgeries, people who simply couldn't give us 30 scheduled minutes. Sonar meant they could participate on their own terms and have their voices heard in a way that a traditional moderated study would never have allowed.

The difference was in how we controlled access. Rather than relying on the AI to detect fraudulent participants after the fact, we required a verified Trust email address to get in and only sent invitations to people we knew were employees. That's the kind of thinking that's missing from a lot of the off-the-shelf platforms selling AI moderation as a simple cost-saving measure, and it's part of why we chose to [build in-house](https://torchbox.com/news/building-an-ai-interviewer-to-scale-user-research/).

AI-moderated research can be cost effective, ethical and genuinely participant-centred. But you can't just accept a marketing pitch from one of these platforms without asking much harder questions about what's happening under the surface.

## It's not just humans gaming the system

AI moderation platforms don't just face the risk of human fraudsters performing for an automated interviewer — they face the risk of AI talking to AI. [A Dartmouth researcher built an AI bot that can complete surveys for around five cents each](https://www.pnas.org/doi/10.1073/pnas.2518075122), passing 99.8% of standard quality checks designed to catch fraudulent responses. In 2024, [more than a third of respondents on one major research platform reported using AI to answer open-ended survey questions](https://www.pnas.org/doi/10.1073/pnas.2518075122). That research focused on text-based surveys, but the same logic applies directly to AI voice responses to interviews.

These bots don't just produce random or obviously fake answers — [they can infer what a researcher's hypothesis is and produce data that confirms it](https://www.thevoiceofuser.com/the-bots-are-coming-for-your-surveys-and-theyre-smart/), showing significantly stronger alignment with that hypothesis than actual human subjects. Think about what that means in practice: an AI moderator asks questions, a fraudster's bot answers them fluently and coherently, the platform scores the responses as high quality, the synthesis looks clean and somewhere downstream a product decision or service design gets built on data that was, in its entirety, a conversation between two machines.

A human moderator can't catch a bot with certainty either, but they can probe, go off-script and ask the question no bot has been trained to expect — like what it actually feels like to wait six months for an assistance dog, or what happens on your first day as a DBS-checked volunteer. The friction of a real human conversation is, for now, still a meaningful filter.

## The false economy

Cheap research that produces unreliable findings doesn't save money — it defers costs into poor product decisions, failed service launches and wasted development effort. In the public and charity sectors, where budgets are tight and the people being served are often vulnerable, the stakes are higher still. A flawed insight in a consumer product study might mean a feature doesn't land. A flawed insight in a service design project for people in crisis can mean something much worse.

## There is a right place for AI in research

None of this is an argument against AI. We use it all the time — as a thought partner in synthesis, analysis, pattern recognition, building discussion guides and more — and used well, it makes researchers faster and sharper. The problem is the specific application of AI as a replacement for the human moderator: the person whose job isn't just to ask questions but to read the room, who knows when to go off-script and who can tell, sometimes just from a pause, that something isn't right.

If you're commissioning research, the question to ask any platform promising AI-moderated interviews at scale isn't "how fast can you deliver?" — it's "how do you know your participants are real?". If the answer relies entirely on automated quality scoring, that's your answer. The human in the loop isn't an optional extra, it's the only thing standing between your findings and an expensive conversation between machines.
