---
title: How we built an AI interviewer to scale user research
date: 2025-11-24
summary: Under the hood of Sonar, our voice AI interviewer for user research. Co-written with the Torchbox engineering team.
tags:
  - post
  - AI
  - Public sector
---

*Written with Brad Koehler, Madhav Manoj and Dan Braghiș.*

A few months ago, we shared [how we were testing AI-powered interviews](https://torchbox.com/public-sector/blog/ai-to-scale-qualitative-research/) to reach thousands of NHS staff who don't have time for traditional research interviews.

Now, as we're at the tail end of the initial experiment, we'll show you under the hood of [Sonar](https://torchbox.com/public-sector/ai-powered-qualitative-research-at-scale/), our voice AI interviewer capable of conducting user research interviews, and what's next.

## A DIY recipe

How do you do something like this? Here's the quick three-step guide.

1. Have audio call infrastructure where you can add an AI agent.
2. Take a Large Language Model (LLM), add a Speech-to-Text model so it can understand what's being said, and a Text-to-Speech model so it can respond - that gives you a voice-enabled AI agent.
3. Make sure the AI agent says the right things and asks the right questions.

### Voice call infrastructure

You can't run interviews if you can't actually talk to the people you want to reach, so since our goal was to make this work across devices and platforms, we decided a web interface would be the most accessible option.

In our search for the right tool, we landed on [LiveKit](https://livekit.io/). It's an open-source platform that enables voice and video calls over the internet. Critically, it also has first-class support for introducing AI agents into these calls.

### AI with a voice

To give your AI a voice, at the very least, you need an LLM to handle the conversation and logic, a Speech-to-Text model to transcribe everything the user says into text, and a Text-to-Speech model to give the LLM a voice to speak with.

Luckily for us, there are quite a few of those around. For our experiment, we started with OpenAI as we could get all three from the same provider.

Another thing we had to consider was a Voice Activity Detector. You only want the Speech-to-Text model running when there's actually speech; otherwise, you burn through tokens quickly. LiveKit includes a built-in voice activity detection model, which you can use right out of the box.

### AI Agent

*What separates an AI from an AI Agent? Well, agency, of course!*

Our AI couldn't just have a nice chat with the user - it needed to conduct an interview. So, we gave it a persona and instructions to follow, via system prompts and tools.

A system prompt is a type of prompt that your AI understands as instructions, while tools serve as a standard interface for the AI to execute custom code that you have written.

We started with a top-level system prompt that outlined the user-researcher persona the AI should adopt, including guidance on tone, when to probe deeper, and how to handle sensitive or emotional moments. For critical topics such as self-harm, we added tool calls that redirected users to the Samaritans' chat helpline.

Each interview was split into multiple stages, and each stage had its own focused system prompt. These prompts outlined the goal of that part of the interview, and the specific questions needed to reach it. We used tool calls to move between stages in the order we'd defined.

The combination of all of this resulted in an AI agent that could run a multi-stage interview and adapt to a real, dynamic conversation. It could probe when something needed more detail, acknowledge sensitive topics, and even ask for clarification.

### Web interface

Last, but not least, we put together a web interface where you could connect to the AI agent and have a conversation with it. We made it fully responsive so it works across devices, from mobile phones to desktop computers.

Another important part was making sure the UX clearly showed what the AI agent was doing. If the AI was thinking, the on-screen status indicators would blink a certain way. If it was talking, the transcript appeared in real time. This gave users a sense of what was happening and helped avoid the feeling of waiting without knowing whether the connection had dropped.

## Things left out

We had to address an immediate need, and so in the interest of speed, we had to leave out a few things.

For starters, we didn't really have an admin interface. All the conversations and prompts were hard-coded, and any change required updating the code and redeploying. Analysis also happened outside the tool - we used a custom script to download transcripts, which were then reviewed manually.

Now that the initial phase is complete, we're working on addressing these while improving the tool.

## Challenges

Building out Sonar had its own fair share of challenges, and we learnt a lot along the way. AI in its current form is a relatively new technology, and we're still figuring out the best way to use it.

The LLM is the brains of the operation, and the first thing you have to figure out is how to get it to understand what you want. It doesn't like it when you give it a wall of text and say, "Now, do all of this!". [It forgets things](https://cduser.com/why-your-ai-forgets-everything-you-say-and-what-context-has-to-do-with-it/) you've told it to do when the conversations run long. The more you talk to it, the slower it seems to get, and the more expensive it becomes. We had to adapt to its preferred style of communication.

We re-wrote and tweaked the system prompts many times. In the early testing phase, almost every conversation revealed a nuance we hadn't accounted for. We found that keeping instructions brief, and reminding the agent to stay on topic worked best, so we refined our prompts to match that.

Sometimes, when it reached the end of a stage, the agent wouldn't move on. It seemed hesitant to trigger tool calls on its own unless the user asked for it. To work around this, we added a quick user confirmation before moving to the next stage. It occasionally led to small repeats in the conversation, but it kept things flowing.

When the conversation flowed, we noticed that the LLM would eventually drift off-topic and stop following its instructions. After some digging, we realised this happened once the conversation passed a certain context length - it simply lost track of what it was meant to do.

This meant we couldn't keep feeding the LLM the full conversation history. We had to give it just enough context to stay grounded, but not so much that it lost sight of its instructions. In the end, we kept only the last few exchanges from the previous stage. It wasn't perfect - it meant that the LLM forgot some information from the earlier stages, but it could now have full-length conversations.

The next problem we ran into was the LLM forgetting what to do when a single stage started to become really long. A single stage had questions that required referencing answers to previous questions in the stage, so simply trimming the conversational context wasn't an option. So we added reminders instead - short system prompts that nudged the LLM when a stage was running long, bringing it back on topic and prompting it to move to the next stage.

While addressing these issues, we also had to keep in mind the latency it took for the LLM to respond. If it took too long to think and respond, it wouldn't be a conversation people would stick around for.

## Compliance

Ensuring regulatory compliance is an important consideration, and even more so when building a tool for use by a public sector organisation like the NHS.

The majority of AI providers and companies are not based in the UK, and among these, few are compliant with UK GDPR and relevant data protection regulations.

We didn't start out looking to build a tool from scratch, but we struggled to find a tool that could do everything we needed while being compliant with UK regulations. When we finally did get to building our own tool, we made sure that our entire software stack was compliant, and added a consent form, Terms of Service and Privacy Policy that clearly communicated what data we would collect, how it would be stored and what we would do with it.

## Ethics

We recognise [there is a cost](https://adasci.org/how-much-energy-do-llms-consume-unveiling-the-power-behind-ai/) to training and running LLMs and other models. In our case, we've managed context efficiently and ensured that only audio that has human speech is fed to the Speech-to-Text model.

Most large language models are trained on large amounts of data scraped from the internet. Some of it is likely to be copyrighted or confidential data, gathered without appropriate consent. Sometimes, the inherent bias from the internet can feed through into the behaviour of LLMs. While there's no clear immediate solution for these problems, we're aware of them and on the lookout for ways to address them.

## The outcome

In our primary phase of interviews, we were able to conduct and analyse over 80 interviews from people across various roles and domains within Guy's and St Thomas' NHS Foundation Trust.

From our analysis, we found that we were able to reach a much wider audience than with human-led interviews. The overall insights aligned quite closely with the human-led interviews, but there were also interesting tidbits we got from the AI-led interviews. These insights directly informed our design and approach to build out the [intranet for Guy's and St Thomas' NHS Foundation Trust](https://torchbox.com/public-sector/blog/a-new-intranet-for-guys-and-st-thomas-nhs-foundation-trust/).

## The future

We're looking at multiple ways to take Sonar forward, both internally and externally.

1. To begin with, we plan to build out an admin interface and add the ability to analyse and synthesise data, to make it a self-serve tool that can be used by user researchers directly.
2. We're looking at improving how we handle context during conversations, while ensuring low-latency. We're aiming for an AI agent that remembers the important bits of a conversation and leverages those bits when relevant.
3. We've seen lots of interest in supporting multiple languages. Enabling people to have conversations in the language they are most comfortable with should lead to deeper insights across more diverse audiences.
4. Better testing! The current process for testing the prompts is very manual. There's currently no easy way to ensure AI agent behaviour when the prompts change, besides manually talking it through different scenarios.
5. Recruitment has been a major pain point for user research, but often, incentivising participation results in people gaming the system for an easy payout. We're looking at potentially building a screener to ensure only real participants get through to the interview.

Besides technical improvements, we are also exploring partnerships and other applications for Sonar, including incident reporting, ongoing feedback gathering, and supporting human customer support agents on call by surfacing relevant information without the need for manual search.
